

function calculateGrade(score){

  switch (true) {
    case (score >= 90 && score <=100):
      console.log("A")
      break;
    case (score >= 80 && score <=89) :
      console.log("B");
      break;
    case (score >= 70 && score <=79) :
      console.log("C")
      break;
    case (score >= 60 && score <=69) :
      console.log("D");
      break;
    case (score < 60 ):
      console.log("F");
      break;

    default:
      console.log("Please Enter Your Score 0 to 100");
      break;
  }

}
calculateGrade(500);
