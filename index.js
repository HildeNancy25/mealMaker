const menu = {
    _meal : '',
    _price : 0,

    set meal  (mealToCheck){
        if (typeof mealToCheck === 'string'){
            return this._meal =  mealToCheck; 
        }
    },

    set price (priceToCheck){
        if (typeof priceToCheck === 'number'){
            return this._price = priceToCheck;
        }
    },

    get todaySpecial (){
       return this._meal && this._price ? console.log('Today is special and Spaghetti is 50$') : 
        console.log('meal or price was not set correctly!');
    }

};

menu.meal = 'hey';
menu.price = 29;
console.log(menu);
console.log(menu.todaySpecial);
