const fs = require('fs');
const path = require('path');
const {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  Footer,
  Header,
  HeadingLevel,
  LevelFormat,
  PageBreak,
  PageNumber,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} = require('docx');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'outputs', 'kabatone-homepage-redesign-audit-2026-08-14.docx');

const sources = [
  {
    file: path.join(root, 'outputs', 'k1-redesign-full-audit-2026-08-14.md'),
    title: 'Full Professional Audit',
    subtitle: 'Design, content, conversion, responsive UX, accessibility, SEO, performance signals, and functional QA',
  },
  {
    file: path.join(root, 'outputs', 'seo-technical-fixes.md'),
    title: 'Appendix A — SEO Technical Remediation Plan',
  },
  {
    file: path.join(root, 'outputs', 'seo-validation-checklist.md'),
    title: 'Appendix B — SEO Launch Validation Checklist',
  },
];

const navy = '07194C';
const blue = '2563EB';
const cyan = '06B6D4';
const ink = '172033';
const muted = '56637A';
const light = 'EAF1FF';
const pale = 'F5F8FD';
const line = 'D8E1EF';
const white = 'FFFFFF';
const contentWidth = 9360;

function inlineRuns(text, options = {}) {
  const runs = [];
  const urlPattern = /(https?:\/\/[^\s)]+)/g;
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|https?:\/\/[^\s)]+)/g).filter(Boolean);
  for (const part of parts) {
    if (part.startsWith('**') && part.endsWith('**')) {
      runs.push(new TextRun({ text: part.slice(2, -2), bold: true, color: options.color || ink }));
    } else if (part.startsWith('`') && part.endsWith('`')) {
      runs.push(new TextRun({ text: part.slice(1, -1), font: 'Courier New', size: 19, color: navy, shading: { fill: light, type: ShadingType.CLEAR } }));
    } else if (urlPattern.test(part)) {
      urlPattern.lastIndex = 0;
      runs.push(new ExternalHyperlink({
        link: part,
        children: [new TextRun({ text: part, style: 'Hyperlink' })],
      }));
    } else {
      runs.push(new TextRun({ text: part, color: options.color || ink, bold: options.bold }));
    }
  }
  return runs;
}

function heading(text, level) {
  return new Paragraph({
    heading: level,
    keepNext: true,
    children: inlineRuns(text),
  });
}

function tableFromRows(rows) {
  const columns = rows[0].length;
  const widths = columns === 3 ? [2500, 1600, 5260] : Array(columns).fill(Math.floor(contentWidth / columns));
  widths[widths.length - 1] += contentWidth - widths.reduce((a, b) => a + b, 0);
  const border = { style: BorderStyle.SINGLE, size: 4, color: line };
  const borders = { top: border, bottom: border, left: border, right: border };
  return new Table({
    width: { size: contentWidth, type: WidthType.DXA },
    columnWidths: widths,
    rows: rows.map((row, rowIndex) => new TableRow({
      tableHeader: rowIndex === 0,
      children: row.map((value, colIndex) => new TableCell({
        width: { size: widths[colIndex], type: WidthType.DXA },
        borders,
        margins: { top: 110, bottom: 110, left: 140, right: 140 },
        shading: { fill: rowIndex === 0 ? navy : (rowIndex % 2 ? white : pale), type: ShadingType.CLEAR },
        verticalAlign: 'center',
        children: [new Paragraph({
          spacing: { before: 0, after: 0 },
          children: inlineRuns(value, { color: rowIndex === 0 ? white : ink, bold: rowIndex === 0 }),
        })],
      })),
    })),
  });
}

let orderedListCounter = 0;
const numberingConfigs = [
  {
    reference: 'audit-bullets',
    levels: [{
      level: 0,
      format: LevelFormat.BULLET,
      text: '•',
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 560, hanging: 280 } } },
    }],
  },
  {
    reference: 'audit-checklist',
    levels: [{
      level: 0,
      format: LevelFormat.BULLET,
      text: '□',
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 600, hanging: 300 } } },
    }],
  },
];

function parseMarkdown(markdown, skipFirstH1 = true) {
  const lines = markdown.replace(/\r/g, '').split('\n');
  const out = [];
  let skippedH1 = false;
  let inOrderedList = false;
  let orderedReference = null;

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i];
    const lineText = raw.trim();
    if (!lineText) {
      inOrderedList = false;
      continue;
    }

    if (lineText.startsWith('|') && i + 1 < lines.length && /^\|?[\s:|-]+\|?$/.test(lines[i + 1].trim())) {
      const rows = [];
      const splitRow = (value) => value.replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim());
      rows.push(splitRow(lineText));
      i += 2;
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(splitRow(lines[i].trim()));
        i += 1;
      }
      i -= 1;
      out.push(tableFromRows(rows));
      out.push(new Paragraph({ spacing: { after: 100 }, children: [] }));
      continue;
    }

    const headingMatch = lineText.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      const depth = headingMatch[1].length;
      if (depth === 1 && skipFirstH1 && !skippedH1) {
        skippedH1 = true;
        continue;
      }
      const level = depth === 1 ? HeadingLevel.HEADING_1 : depth === 2 ? HeadingLevel.HEADING_2 : HeadingLevel.HEADING_3;
      out.push(heading(headingMatch[2], level));
      inOrderedList = false;
      continue;
    }

    const checklist = lineText.match(/^- \[ \]\s+(.+)$/);
    if (checklist) {
      out.push(new Paragraph({
        numbering: { reference: 'audit-checklist', level: 0 },
        spacing: { before: 24, after: 75 },
        keepLines: true,
        children: inlineRuns(checklist[1]),
      }));
      continue;
    }

    const bullet = lineText.match(/^-\s+(.+)$/);
    if (bullet) {
      out.push(new Paragraph({
        numbering: { reference: 'audit-bullets', level: 0 },
        spacing: { after: 75 },
        children: inlineRuns(bullet[1]),
      }));
      continue;
    }

    const ordered = lineText.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      if (!inOrderedList) {
        orderedListCounter += 1;
        orderedReference = `ordered-${orderedListCounter}`;
        numberingConfigs.push({
          reference: orderedReference,
          levels: [{
            level: 0,
            format: LevelFormat.DECIMAL,
            text: '%1.',
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 620, hanging: 320 } } },
          }],
        });
        inOrderedList = true;
      }
      out.push(new Paragraph({
        numbering: { reference: orderedReference, level: 0 },
        spacing: { after: 90 },
        children: inlineRuns(ordered[1]),
      }));
      continue;
    }

    out.push(new Paragraph({
      spacing: { after: 125, line: 300 },
      children: inlineRuns(lineText),
    }));
    inOrderedList = false;
  }
  return out;
}

const auditMd = fs.readFileSync(sources[0].file, 'utf8');
const seoMd = fs.readFileSync(sources[1].file, 'utf8');
const checklistMd = fs.readFileSync(sources[2].file, 'utf8');

const documentChildren = [
  new Paragraph({
    spacing: { before: 1100, after: 220 },
    border: { top: { style: BorderStyle.SINGLE, size: 28, color: blue, space: 1 } },
    children: [new TextRun({ text: 'KABATONE', bold: true, color: navy, size: 24, characterSpacing: 120 })],
  }),
  new Paragraph({
    spacing: { before: 700, after: 240 },
    children: [new TextRun({ text: 'Homepage Redesign', bold: true, color: navy, size: 58 })],
  }),
  new Paragraph({
    spacing: { after: 420 },
    children: [new TextRun({ text: 'Professional Website Audit', bold: true, color: blue, size: 40 })],
  }),
  new Paragraph({
    spacing: { after: 160 },
    children: [new TextRun({ text: sources[0].subtitle, color: muted, size: 24 })],
  }),
  new Paragraph({
    spacing: { before: 700, after: 120 },
    children: [new TextRun({ text: 'Audited URL', bold: true, color: navy, size: 20 })],
  }),
  new Paragraph({
    children: [new ExternalHyperlink({
      link: 'https://k1-redesign.vercel.app/hero-lab-story',
      children: [new TextRun({ text: 'k1-redesign.vercel.app/hero-lab-story', style: 'Hyperlink', size: 22 })],
    })],
  }),
  new Paragraph({
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text: 'Audit date', bold: true, color: navy, size: 20 })],
  }),
  new Paragraph({ children: [new TextRun({ text: 'August 14, 2026', color: ink, size: 22 })] }),
  new Paragraph({
    spacing: { before: 1100 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 10, color: cyan, space: 1 } },
    children: [new TextRun({ text: 'Prepared for KabatOne leadership and website stakeholders', italics: true, color: muted, size: 20 })],
  }),
  new Paragraph({ children: [new PageBreak()] }),
  heading('Contents', HeadingLevel.HEADING_1),
  new Paragraph({ spacing: { after: 220 }, children: [new TextRun({ text: 'This report combines the audit findings, prioritized remediation plan, and production launch checklist.', color: muted, size: 20 })] }),
  tableFromRows([
    ['Section', 'Coverage'],
    ['Full Professional Audit', 'Executive assessment; priorities; design; content; conversion; responsive UX; accessibility; technical SEO; performance; functional QA; release recommendation'],
    ['Appendix A', 'SEO technical remediation plan for staging protection, production metadata, indexing, hreflang, structured data, content trust, and performance'],
    ['Appendix B', 'Production SEO and launch validation checklist covering crawlability, metadata, localization, accessibility, performance, and release checks'],
  ]),
  new Paragraph({ spacing: { before: 260, after: 100 }, children: [new TextRun({ text: 'Priority scale', bold: true, color: navy, size: 23 })] }),
  new Paragraph({ numbering: { reference: 'audit-bullets', level: 0 }, children: [new TextRun({ text: 'P1 — complete before production promotion', bold: true, color: ink })] }),
  new Paragraph({ numbering: { reference: 'audit-bullets', level: 0 }, children: [new TextRun({ text: 'P2 — high-value refinement after launch blockers are cleared', color: ink })] }),
  new Paragraph({ spacing: { before: 260, after: 100 }, children: [new TextRun({ text: 'Overall recommendation', bold: true, color: navy, size: 23 })] }),
  new Paragraph({ spacing: { after: 120, line: 300 }, children: [new TextRun({ text: 'Proceed with stakeholder review. Resolve the seven P1 items before replacing the production homepage.', color: ink })] }),
  new Paragraph({ children: [new PageBreak()] }),
  heading(sources[0].title, HeadingLevel.HEADING_1),
  ...parseMarkdown(auditMd),
  new Paragraph({ children: [new PageBreak()] }),
  heading(sources[1].title, HeadingLevel.HEADING_1),
  ...parseMarkdown(seoMd),
  new Paragraph({ children: [new PageBreak()] }),
  heading(sources[2].title, HeadingLevel.HEADING_1),
  ...parseMarkdown(checklistMd),
];

const doc = new Document({
  creator: 'Codex',
  title: 'KabatOne Homepage Redesign — Professional Website Audit',
  subject: 'Design, content, UX, accessibility, SEO, performance, and functional QA audit',
  description: 'Professional audit of the KabatOne homepage redesign review build.',
  keywords: 'KabatOne, website audit, UX, SEO, accessibility, performance',
  numbering: { config: numberingConfigs },
  styles: {
    default: {
      document: { run: { font: 'Arial', size: 21, color: ink }, paragraph: { spacing: { after: 120, line: 300 } } },
    },
    paragraphStyles: [
      {
        id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: 'Arial', size: 34, bold: true, color: navy },
        paragraph: { spacing: { before: 280, after: 170 }, outlineLevel: 0, keepNext: true },
      },
      {
        id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: 'Arial', size: 27, bold: true, color: blue },
        paragraph: { spacing: { before: 240, after: 130 }, outlineLevel: 1, keepNext: true },
      },
      {
        id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: 'Arial', size: 23, bold: true, color: navy },
        paragraph: { spacing: { before: 190, after: 100 }, outlineLevel: 2, keepNext: true },
      },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1080, right: 1440, bottom: 1080, left: 1440, header: 520, footer: 520 },
      },
      titlePage: true,
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 5, color: line, space: 1 } },
        children: [
          new TextRun({ text: 'KABATONE  |  HOMEPAGE REDESIGN AUDIT', bold: true, color: navy, size: 17, characterSpacing: 60 }),
        ],
      })] }),
      first: new Header({ children: [new Paragraph({ children: [] })] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
          new TextRun({ text: 'CONFIDENTIAL  •  AUGUST 2026   |   ', color: muted, size: 16 }),
          new TextRun({ children: [PageNumber.CURRENT], color: navy, size: 16, bold: true }),
        ],
      })] }),
      first: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'KABATONE  •  PROFESSIONAL WEBSITE AUDIT', color: muted, size: 16 })] })] }),
    },
    children: documentChildren,
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(output, buffer);
  console.log(output);
});
