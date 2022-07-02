function createSelectBox(startYear, endYear) {
    let arr = [];
    let count= endYear - startYear;
    document.write(`<select>`);
      for(let i=0;i<=count;i++){
        arr = arr.concat(startYear+i)
        document.write(`
        <option>${arr[i]}</option>
      `)
        }
    document.write(`</select>`)
  }
  createSelectBox(2000, 2021);