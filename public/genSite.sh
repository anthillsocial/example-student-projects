#!/usr/bin/env bash

OUTPUT="index.html"

# Function: turn CamelCase into "Camel Case"
camel_to_words() {
  echo "$1" | sed -E 's/([a-z0-9])([A-Z])/\1 \2/g'
}

# Module labels (ordered list)
read -r -d '' MODULE_LABELS_TEXT <<'EOT'
MA3801="Advanced Digital Media (Y3)"
MA2013="Experimental Interfaces (Y2)"
MA2806="Data Journalism & Visualisation (Y2)"
MA1805="Coding for the arts (Y1)"
EOT

# Declare associative array
declare -A MODULE_LABELS
MODULE_ORDER=()

while IFS='=' read -r code label; do
  code=$(echo "$code" | xargs)
  label=$(echo "$label" | sed 's/^"//; s/"$//')
  MODULE_LABELS[$code]="$label"
  MODULE_ORDER+=("$code")
done <<< "$MODULE_LABELS_TEXT"

# Collect all project folders
projects=()
for module_dir in */ ; do
  [ -d "$module_dir" ] || continue
  for project_dir in "$module_dir"*/ ; do
    [ -d "$project_dir" ] || continue
    [ -f "$project_dir/index.html" ] || continue
    projects+=("$project_dir")
  done
done

# Function to get module code
get_module() {
  folder="$1"
  base=$(basename "$folder")
  IFS='-' read -r module _ <<<"$base"
  echo "$module"
}

# Sort projects by MODULE_ORDER and then by numeric prefix in title
sorted_projects=()
for mod in "${MODULE_ORDER[@]}"; do
  module_projects=()
  for proj in "${projects[@]}"; do
    if [ "$(get_module "$proj")" = "$mod" ]; then
      module_projects+=("$proj")
    fi
  done

  if [ "${#module_projects[@]}" -gt 0 ]; then
    IFS=$'\n' sorted_module_projects=($(for p in "${module_projects[@]}"; do
      base=$(basename "$p")
      IFS='-' read -r _ _ _ title_part <<<"$base"
      num=$(echo "$title_part" | grep -o '^[0-9]\+' || echo "0")
      printf "%05d:%s\n" "$num" "$p"
    done | sort -n | cut -d: -f2))
    sorted_projects+=("${sorted_module_projects[@]}")
  fi
done

# Begin HTML output
cat >"$OUTPUT" <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>DMCT Projects</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
:root {
  --font-size-base: 21px;       /* Base font size */
  --scale-small: 0.9;          /* Small text multiplier */
  --scale-smaller: 0.8;        /* Smaller text multiplier */
  --scale-header: 1.8;          /* Header text multiplier */
  --opacity-light: 0.8;         /* For less prominent text */
  --opacity-lighter: 0.7;       /* For bottom bar overlay */
}

/* Reset and box-sizing */
* { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: var(--font-size-base) !important; }
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #111;
  background: #ccc;
}

/* Header */
#header {
  background: #555;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}
#header h1 {
  flex: 1 1 600px;
  font-size: calc(var(--scale-header) * 1rem);
  opacity: 0.9;
  margin: 0;
}
#overview {
  flex: 2 1 400px;
  font-size: calc(var(--scale-small) * 1rem);
  line-height: 1.1;
  opacity: var(--opacity-light);
}

/* Links */
a, a:link { color: #fff; opacity: 0.8; text-decoration: none; }

/* Filters */
.filters, .grid { padding: 20px; }
.filters { padding-bottom: 0; font-size: calc(var(--scale-small) * 1rem); }

.filter-group { display: inline; }
.filter-label { font-weight: 600; }
.filter-buttons { display: inline; }
.filter-btn {
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 4px 10px;
  border: 1px solid #444;
  border-radius: 999px;
  background: #eee;
  color: #111;
  font-size: calc(var(--scale-smaller) * 1rem);
  cursor: pointer;
  transition: background 0.15s ease-out, color 0.15s ease-out, border-color 0.15s ease-out;
}
.filter-btn:hover { background: #ddd; }
.filter-btn.active { background: #111; color: #fff; border-color: #111; }

/* Grid & Cards */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.card {
  position: relative;
  display: block;
  min-height: 200px;
  border-radius: 12px;
  text-decoration: none;
  color: #fff;
  background-color: #333;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
}
.card::before { content: ""; position: absolute; inset: 0; z-index: 0; }

/* Bottom bar */
.bottom-bar {
  position: absolute; left: 0; right: 0; bottom: 0;
  z-index: 2;
  background: rgba(0,0,0,var(--opacity-lighter));
  padding: 8px 12px;
  transition: opacity 0.3s ease;
}
.card:hover .bottom-bar { opacity: 0; }

.bottom-bar .title,
.bottom-bar .module {
  font-size: calc(var(--scale-small) * 1rem);
}
.bottom-bar .title { font-weight: 600; margin-bottom: 4px; }
.bottom-bar .module { opacity: var(--opacity-light); }

/* Hover overlay */
.hover-overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.85);
  color: #fff;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
  overflow-y: auto;
}
.card:hover .hover-overlay { opacity: 1; }

.hover-overlay .module,
.hover-overlay .title,
.hover-overlay .student,
.hover-overlay .cohort,
.hover-overlay .meta {
  font-size: calc(var(--scale-small) * 1rem);
}
.hover-overlay .cohort { font-size: calc(var(--scale-smaller) * 1rem); opacity: var(--opacity-light); }
.hover-overlay .meta { opacity: 0.9; }

/* Card hover effect */
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0,0,0,0.35);
}

</style>
</head>
<body>
<div id=header>
  <h1>DMCT Student Projects</h1>
  <p id="overview">1st/2nd/3rd year work from the <a href="https://www.royalholloway.ac.uk/studying-here/undergraduate/media-arts/digital-media-culture-and-technology-ba/">BA Digital Media Culture and Technology (DMCT)</a> at Royal Holloway University. Code hosted on <a href="https://github.com/anthillsocial/example-student-projects">GitHub</a>.</p>
</div>

<div class="filters">
  <div class="filter-group"><div id="filter-modules" class="filter-buttons"></div></div>
  <div class="filter-group"><div id="filter-years" class="filter-buttons"></div></div>
  <div class="filter-group"><div id="filter-projects" class="filter-buttons"></div></div>
</div>

<div class="grid">
EOF

# Write project cards
for project_dir in "${sorted_projects[@]}"; do
  base="${project_dir%/}"
  base=$(basename "$base")
  IFS='-' read -r module year student title_part <<<"$base"

  # Remove numeric prefix for display
  display_title=$(echo "$title_part" | sed 's/^[0-9]\+_//')
  title_spaced=$(camel_to_words "$display_title")
  student_spaced=$(camel_to_words "$student")

  img_path=$(find "$project_dir" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.gif' -o -iname '*.webp' \) | sort | head -n 1)
  [ -n "$img_path" ] && bg_style="background-image: url('${img_path}');" || bg_style=""

  top_folder=$(basename "$(dirname "$project_dir")")
  archive_flag="false"
  [ "$top_folder" = "archived" ] && archive_flag="true"

  desc_file="$project_dir/desc.txt"
  if [ -f "$desc_file" ]; then
    desc_text=$(<"$desc_file")
    desc_text=$(echo "$desc_text" | sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g')
  else
    desc_text="..."
  fi

  module_label="${MODULE_LABELS[$module]}"

  cat >>"$OUTPUT" <<EOF
<a class="card" href="${project_dir%/}/index.html" style="$bg_style" data-module="$module" data-year="$year" data-archive="$archive_flag">
  <div class="bottom-bar">
    <div class="module">$module_label</div>
    <div class="title">$title_spaced</div>
  </div>
  <div class="hover-overlay">
    <div class="cohort">$module_label</div>
    <div class="student"><b>$student_spaced</b></div>
    <div class="meta">$desc_text</div>
  </div>
</a>
EOF
done

# Function to convert Bash array to a JS object
generate_js_module_labels() {
  echo -n "const MODULE_LABELS = {"
  local first=1
  for mod in "${MODULE_ORDER[@]}"; do
    label=${MODULE_LABELS[$mod]}
    if [ $first -eq 1 ]; then
      first=0
    else
      echo -n ", "
    fi
    echo -n "$mod: \"$label\""
  done
  echo "};"
}

# JS for filters
cat >>"$OUTPUT" <<EOF
</div>

<script>
// Auto-generated JS module labels
$(generate_js_module_labels)

function getQueryParam(name){const params=new URLSearchParams(window.location.search);return params.get(name);}
function updateURL(param,value){const url=new URL(window.location);if(value) url.searchParams.set(param,value); else url.searchParams.delete(param); window.history.replaceState({},'',url);}
function getProjectYear(moduleCode){switch(moduleCode.slice(2,3)){case '1': return '1st year'; case '2': return '2nd year'; case '3': return '3rd year'; default: return '';}}
function getModuleLabel(code){return MODULE_LABELS[code]||code;}

document.addEventListener('DOMContentLoaded',()=>{
  const cards=Array.from(document.querySelectorAll('.card'));
  const moduleContainer=document.getElementById('filter-modules');
  const yearContainer=document.getElementById('filter-years');
  const projectContainer=document.getElementById('filter-projects');

  let activeModule=getQueryParam('module')||null;
  let activeYear=getQueryParam('year')||null;
  let activeProjectYear=getQueryParam('projectYear')||null;

  function applyFilters(){
    cards.forEach(card=>{
      const isArchived=card.dataset.archive==='true';
      let matchesModule; 
      if(activeModule==='archived') matchesModule=isArchived;
      else if(activeModule) matchesModule=card.dataset.module===activeModule&&!isArchived;
      else matchesModule=!isArchived;
      const matchesYear=!activeYear||card.dataset.year===activeYear;
      const matchesProjectYear=!activeProjectYear||getProjectYear(card.dataset.module)===activeProjectYear;
      card.style.display=(matchesModule&&matchesYear&&matchesProjectYear)?'':'none';
    });
  }

  function makeButton(label,onClick){const btn=document.createElement('button');btn.className='filter-btn';btn.textContent=label;btn.addEventListener('click',onClick);return btn;}

  // Module buttons
  const allModulesBtn=makeButton('All modules',()=>{activeModule=null;updateURL('module','');moduleContainer.querySelectorAll('button').forEach(b=>b.classList.remove('active'));allModulesBtn.classList.add('active');applyFilters();});
  moduleContainer.appendChild(allModulesBtn);
  Object.keys(MODULE_LABELS).forEach(mod=>{
    const btn=makeButton(MODULE_LABELS[mod],()=>{activeModule=mod;updateURL('module',mod);moduleContainer.querySelectorAll('button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');applyFilters();});
    moduleContainer.appendChild(btn);
  });
  if(cards.some(c=>c.dataset.archive==='true')){
    const archBtn=makeButton('Archived',()=>{activeModule='archived';updateURL('module','archived');moduleContainer.querySelectorAll('button').forEach(b=>b.classList.remove('active'));archBtn.classList.add('active');applyFilters();});
    moduleContainer.appendChild(archBtn);
  }

  // Year buttons
  const allYearsBtn=makeButton('All years',()=>{activeYear=null;updateURL('year','');yearContainer.querySelectorAll('button').forEach(b=>b.classList.remove('active'));allYearsBtn.classList.add('active');applyFilters();});
  yearContainer.appendChild(allYearsBtn);
  Array.from(new Set(cards.map(c=>c.dataset.year))).sort().forEach(y=>{const btn=makeButton(y,()=>{activeYear=y;updateURL('year',y);yearContainer.querySelectorAll('button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');applyFilters();});yearContainer.appendChild(btn);});

  // Project year buttons
  const allProjectBtn=makeButton('All projects',()=>{activeProjectYear=null;updateURL('projectYear','');projectContainer.querySelectorAll('button').forEach(b=>b.classList.remove('active'));allProjectBtn.classList.add('active');applyFilters();});
  projectContainer.appendChild(allProjectBtn);
  ['1st year','2nd year','3rd year'].forEach(py=>{const btn=makeButton(py,()=>{activeProjectYear=py;updateURL('projectYear',py);projectContainer.querySelectorAll('button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');applyFilters();});projectContainer.appendChild(btn);});

  allModulesBtn.classList.add('active'); allYearsBtn.classList.add('active'); allProjectBtn.classList.add('active');
  applyFilters();
});
</script>

</body>
</html>
EOF


echo "Wrote index.html"
