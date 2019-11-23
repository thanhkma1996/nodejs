var person = {
    ho : "Thanh",
    ten : "nguyen",
    chaomung : function(){
      console.log("chao ban" + this.ho + "" + this.ten);
    }
}

person.chaomung();
console.log(person["ten"]);
