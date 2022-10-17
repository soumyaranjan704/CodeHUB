
/**
 * 
 * @param {*} pagination  All thr pagination functionlity added here
 
 
 */

export default function pagination(dataSet, page, rows) {
    page = +page;
    rows = +rows;

    let startIndex = (page - 1) * rows;
    console.log()
    let endIndex = startIndex + rows;

  
    let trimmedData = dataSet.slice(startIndex, endIndex);
  
    let pages = Math.ceil(dataSet.length / rows);
  
    // In Return Getting Trimmed Data and pages
    return {
      dataSet: trimmedData,
      pages: pages,
    };
    
  }


