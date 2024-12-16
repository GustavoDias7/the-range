export async function getSheetsData() {
  const spreadsheetId = "1RUAVPA4aIXETUTWCKcmydG8WP0BG1TNybv-ZH48hQhs";
  const endpoint = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`;
  const response = await fetch(endpoint);
  const result = await response.text();
  const json = JSON.parse(
    result.replace(
      /.*google.visualization.Query.setResponse\({(.*?)}\);?/s,
      "{$1}"
    )
  );
  const columns = [];
  const data = {};
  json.table.cols.forEach((col, index) => {
    const title = json.table.rows[0].c[index]?.v;
    if (title) {
      columns.push(title);
      data[title] = json.table.rows
        .map((row) => row?.c[index]?.v)
        .filter((row) => row);
      data[title].shift();
    }
  });

  const d = { data, columns };

  localStorage.setItem("questions", JSON.stringify(d));

  return d;
}
