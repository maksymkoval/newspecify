$(document).ready(function(){
    $(".btnfooterfeat").click(function(){
        $(".togglefeatures").toggle();
        $('.btnfooterfeat .fas').toggle();
      });
      $(".btnfootercom").click(function(){
        $(".togglecommunity").toggle();
        $('.btnfootercom .fas').toggle();
      });
      $(".btnfooterleg").click(function(){
        $(".togglelegal").toggle();
        $('.btnfooterleg .fas').toggle();
      });
});