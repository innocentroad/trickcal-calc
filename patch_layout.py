import re

def main():
    # --- UPDATE INDEX.HTML ---
    html_path = r"d:\Games\etc\trickcal\calculator\index.html"
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Reorder result cards
    new_results_html = '''<div class="results-grid">
                    <div class="result-card">
                        <h3>通常ダメージ</h3>
                        <p id="res-normal">0</p>
                        <span class="improvement-text" id="imp-normal" style="display:none">+0.0%</span>
                    </div>
                    <div class="result-card highlight">
                        <h3>期待値</h3>
                        <p id="res-expected">0</p>
                        <span class="improvement-text" id="imp-expected" style="display:none">+0.0%</span>
                    </div>
                    <div class="result-card highlight-secondary">
                        <h3>会心ダメージ</h3>
                        <p id="res-crit-dmg">0</p>
                        <span class="improvement-text" id="imp-crit-dmg" style="display:none">+0.0%</span>
                    </div>
                    <div class="result-card highlight-secondary">
                        <h3>会心率</h3>
                        <p id="res-crit-rate">0%</p>
                        <span class="improvement-text" id="imp-crit-rate" style="display:none">+0.0%</span>
                    </div>
                </div>'''
    html = re.sub(r'<div class="results-grid">[\s\S]*?</div>\n\n                <div class="divider"></div>', new_results_html + '\n\n                <div class="divider"></div>', html)

    # Reorder checkboxes
    new_checkboxes = '''<div class="checkbox-group">
                            <label><input type="checkbox" id="show-normal" checked> 通常ダメージ</label>
                            <label><input type="checkbox" id="show-expected" checked> 期待値</label>
                            <label><input type="checkbox" id="show-crit" checked> 会心ダメージ</label>
                        </div>'''
    html = re.sub(r'<div class="checkbox-group">[\s\S]*?</div>', new_checkboxes, html)

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)

    # --- UPDATE SCRIPT.JS ---
    js_path = r"d:\Games\etc\trickcal\calculator\script.js"
    with open(js_path, 'r', encoding='utf-8') as f:
        js = f.read()

    # Reorder dataset pushing
    datasets_replace = '''    const datasets = [];
    if (graphControls.showNormal.checked) {
        datasets.push({
            label: '通常ダメージ',
            data: normalData,
            borderColor: '#94a3b8',
            borderDash: [],
            tension: 0.4,
            pointBackgroundColor: pointColors,
            pointRadius: pointRadii
        });
    }
    if (graphControls.showExpected.checked) {
        datasets.push({
            label: '期待値',
            data: expectedData,
            borderColor: '#6366f1',
            borderDash: [5, 5],
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: pointColors,
            pointRadius: pointRadii
        });
    }
    if (graphControls.showCrit.checked) {
        datasets.push({
            label: '会心ダメージ',
            data: critData,
            borderColor: '#ec4899',
            borderDash: [5, 5],
            tension: 0.4,
            pointBackgroundColor: pointColors,
            pointRadius: pointRadii
        });
    }'''
    js = re.sub(r'    const datasets = \[\];[\s\S]*?        \}\);\n    \}', datasets_replace, js)

    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(js)

    # --- UPDATE STYLE.CSS ---
    css_path = r"d:\Games\etc\trickcal\calculator\style.css"
    with open(css_path, 'r', encoding='utf-8') as f:
        css = f.read()

    new_css = '''\.results-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
}

.result-card {
    background: rgba(255, 255, 255, 0.03);
    padding: 0.8rem 0.2rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.result-card h3 {
    font-size: 0.75rem;
    color: #94a3b8;
    margin: 0;
    margin-bottom: 0.3rem;
    white-space: nowrap;
}
.result-card p {
    font-size: 1.1rem;
    font-weight: 800;
    margin: 0;
}
.improvement-text {
    width: 100%;
    text-align: center;
    display: block;
    font-size: 0.75rem;
    font-weight: bold;
    margin-top: 0.2rem;
}'''

    css = re.sub(r'\.results-grid \{[\s\S]*?\.improvement-text \{[\s\S]*?margin-top: 0\.2rem;\n\}', new_css, css)

    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css)

    print("Patched layout!")

if __name__ == "__main__":
    main()
