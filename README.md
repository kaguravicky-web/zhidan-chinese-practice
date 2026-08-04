# Zhidan Chinese Practice

Chinese practice app for Zhidan's weekly school and HCL review.

Public site:
https://kaguravicky-web.github.io/zhidan-chinese-practice/

## Files

- `outputs/index.html` - main app source and GitHub Pages entry.
- `outputs/jidam-minion-chinese-practice.html` - legacy entry kept identical to `outputs/index.html`.
- `work/practice-script-check.js` - lightweight validation script.

The GitHub Pages repository also keeps root-level `index.html` and
`jidam-minion-chinese-practice.html` copies so the site can be served from the
repository root.

## Maintenance

1. Edit `outputs/index.html`.
2. Copy it to `outputs/jidam-minion-chinese-practice.html`.
3. Run:

```powershell
node work/practice-script-check.js
```

4. When publishing, copy both output HTML files to the repository root as:
   - `index.html`
   - `jidam-minion-chinese-practice.html`

## Content Notes

- The child name is `智澹`.
- Home tabs are `学校`, `HCL`, and `错题本`.
- HCL course data is stored in the inline `courses` array.
- Vocabulary click-help is stored in `VOCAB_HELP`.
- Keep dictation items in separate school/HCL groups.
- For word matching, keep each question to at most four choices.
- For sequencing exercises, keep the whole paragraph visible and let the child
  enter/select order numbers.
