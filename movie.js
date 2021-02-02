let Movie = function(title, rating) {
    this.title = title;
    this.rating = rating;

    this.validateFields = function() {
        if (this.rating >= 1 && this.rating <= 5 && (!!this.title && this.title.trim().length > 0) ) {
            return true;
        }

        else {
            return false;
        }
    }
    
    this.toString = function() {
        return this.title + " " + this.rating;
    }
}

