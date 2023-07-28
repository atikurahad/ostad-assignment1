function disCalculator(purchaseAmount) {
  if (purchaseAmount < 50) {
    const discount = (purchaseAmount * 0) / 100;
    const total = purchaseAmount - discount;
    console.log(
      ` Discounted amount: ${total}, Total amount: ${purchaseAmount},  Discount amount:${discount}`
    );
    console.log("No discount is applied.");
  } else if (purchaseAmount >= 50 && purchaseAmount < 100) {
    const discount = (purchaseAmount * 5) / 100;
    const total = purchaseAmount - discount;
    console.log(
      ` Discounted amount: ${total}, Total amount: ${purchaseAmount},  Discount amount:${discount}`
    );
    console.log("you got 5% discount");
  } else if (purchaseAmount >= 100 && purchaseAmount < 200) {
    const discount = (purchaseAmount * 10) / 100;
    const total = purchaseAmount - discount;
    console.log(
      ` Discounted amount: ${total}, Total amount: ${purchaseAmount},  Discount amount:${discount}`
    );
    console.log("you got 10% discount");
  } else if (purchaseAmount > 200) {
    const discount = (purchaseAmount * 15) / 100;
    const total = purchaseAmount - discount;
    console.log(
      ` Discounted amount: ${total}, Total amount: ${purchaseAmount},  Discount amount: ${discount}`
    );
    console.log("you got 15% discount");
  }
}

disCalculator(211);
