
var matched_ingredients_counter = 0;
var dishes = [];
var match_rate = 1;
var the_bar = 100;
var selected_items = ["chicken", "butter", "salt"];
var cell;
const readXlsxFile = require('read-excel-file/node');

readXlsxFile(fs.createReadStream('./Recipes_Better_3')).then((rows) => {
    while (dishes.length >= 33 || match_rate > 0) {

        for (i in rows) {
            var title = row[i][1]; 
            var link = row[i][20]; 
            var image = row[i][21]; 
            for (j in rows[i]) {
                cell = (rows[i][j]);
                for (var item = selected_items.length; item < selected_items.length; item++) {
                    var name = cell.includes(item);
                    if (name == true) {
                        matched_ingredients_counter++;
                        match_rate = (matched_ingredients_counter / selected_items.length) * 100;

                        if (match_rate > the_bar) {
                            dishes.push(title);
                            dishes.push(link);
                            dishes.push(image);
                        }
                    }

                    else {

                        match_rate = 0; 

                    }
                }
            }
            matched_ingredients_counter = 0; 
        }

        the_bar = the_bar-20; 
    }
    console.log(dish); 