const Discount = require("../src/app").Discount;
const Product = require("../src/app").Product;
const Stock = require("../src/app").Stock;
const expect = require("chai").expect;

describe("Testing the Cart Functions", function () {
  it("1. Add product in cart", function (done) {
    let c = new Cart();
    expect(c.addArticle("chaussette", 40)).to.deep.equal([
      { article: "chaussette", prix: 40 },
    ]);
    done();
  });
  it("2. Get the total price of the cart", function() {
    let c = new Cart();
    c.articles = [{ article:"chaussette", prix: 10 }, { article:"short", prix: 20 }, { article:"pull", prix: 30 }];
    const expectedTotalPrice = 60;
    expect(c.getTotalPrice()).to.equal(expectedTotalPrice);
  })
  it("3. delete an article", function() {
    let c = new Cart();
    c.articles = [{ article:"chaussette", prix: 10 }, { article:"short", prix: 20 }, { article:"pull", prix: 30 }];
    res = [{ article:"short", prix: 20 }, { article:"pull", prix: 30 }]
    c.deleteArticles("chaussette");
    expect(c.articles).to.deep.equal([{ article:"short", prix: 20 }, { article:"pull", prix: 30 }]);
  })
  it("4. empty cart",function() {
    let c = new Cart()
    c.articles = [{ article:"chaussette", prix: 10 }, { article:"short", prix: 20 }, { article:"pull", prix: 30 }];
    res = [{ article:"short", prix: 20 }, { article:"pull", prix: 30 }]
    c.emptyCart();
    expect(c.articles.length).to.equal(0);
  })
});


describe("Testing the Discount Functions", function () {

  it("0. vérifier que le coupon a bien été appliqué", function() {
    let d = new Discount();
    article = {article: "chaussette", price: 40, discount: 10};
    expect(d.applyDiscount(article)).to.equal(30);
  })
  it("1. vérifier que le coupon existe", function() {
    let d = new Discount();
    article = {article: "chaussette", price: 40, discount: ""};
    expect(d.hasDiscount(article)).false;
  })
  it("2.le prix de l'article ne peut pas être négatif", function() {
    let d = new Discount();
    article = {article: "chaussette", price: 40, discount: 150};
    expect(d.applyDiscount(article)).to.throw();
  })
  it("3. un coupon ne peut être utilisé qu'une seule fois sur un article", function() {
    let d = new Discount();
    article = {article:"chaussette", price:40, discount:150, applied:true};
    expect(d.couponApplied(article)).to.true
  })
})