
class Cart {
  articles = [];
  price = [];

  constructor() {}

  addArticle(article, prix) {
    this.articles.push({ article, prix });
    this.price.push(prix);
    return this.articles;
  }

  getTotalPrice() {
    return this.articles
      .map((val) => val.prix)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
  }

  deleteArticles(article) {
    let ind = this.articles.findIndex(art => art.article === article);
    if(ind !== -1) {
      this.articles.splice(
          ind, 1
      );
      return "votre article :" + article + "a été supprimé";
    } else {
      return "Votre article n'a pas été supprimé !"
    }
  }

  emptyCart() {
    this.articles.splice(0, this.articles.length);
    return "votre panier est vide";
  }
}

class Discount {
  articles = []
  constructor() {
  }

  addDiscount(article) {
  }

  getDiscount(article) {
    return article.discount
  }

  applyDiscount(article) {
    if(this.hasDiscount(article)) {
      if(article.discount >article.price) {
        throw new Error('la remise doit-être inférieure ou égale au prix du produit');
      }
      if(article.applied) {
        throw new Error('la remise a déjà été effectuée')
      }
      article.applied=true;
      article.price - (article.discount);
      return article
    }
  }

  hasDiscount(article) {
    if(article.discount) {
      return true
    } else {
      return false
    }
  }
  couponApplied(article) {
    if(article.applied) {
      return true
    } else {
      return false
    }
  }

  addCouponToList(coupon, list) {
    res = list.map(article => this.addCoupon(coupon, article));
    return res
  }

  addCoupon(coupon, article) {
    return article.discount = coupon;
  }

}
class Product {
  price =0;
  name="";
  datePeremption;
  creation_date;
  deleted_date="";
  constructor(price, name, datePeremption, creationDate=Date.now) {
    this.price = price;
    this.name = name;
    this.datePeremption = datePeremption;
    this.creation_date=creationDate;
  }



}
class Stock {
  productList = [] ;
  productListHistory;
  constructor(list) {
    this.productList=list;
  };
  addProduct(name, price, datePeremption) {
    let p = new Product(name=name, price=price, datePeremption=datePeremption);
    this.productList.push(p)
  }

  deleteProduct(product) {
    if (productList && productList.length > 0) {
      let ind = this.productList.findIndex(art => art.article === article);
      if (ind !== -1) {
        this.productList[ind].deleted_date = Date.now();
      } else {
        return "article introuvable"
      }
    }
  }
  getStock() {
    productList.forEach(el => console.log(el));
  }

  compareStock(first_date, second_date) {
    let stockBis = productList.map(el => el.creation_date<first_date);
    console.log("à date du : "+first_date+" il y a "+ stockBis.length+ " produits")
    console.log("à date du : "+second_date+" il y a "+ productList.length+" produits")
  }

}

module.exports = {
  Cart: Cart,
  Discount: Discount,
  Stock: Stock,
  Product: Product,
};
