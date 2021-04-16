var loanamount;
var interest;
var anyears;
      $(document).ready(function() {          
      $( "#mySliderLoan" ).slider({
    range: "max",
    min: 1000,
    max: 50000000,
    value: 3000000,
    step:1000,
    slide: function( event, ui ) {
      $( "#loanamount" ).val( ui.value );
      loanamount=ui.value;
      mnam();
    }
  });
  $( "#loanamount" ).val( $( "#mySliderLoan" ).slider( "value" ) );  
  loanamount=document.getElementById("loanamount").value;
      });
     
      $(document).ready(function() {          
      $( "#mySliderinterest" ).slider({
    range: "max",
    min: 8,
    max: 15,
    value: 9.05,
    step:0.01,
    slide: function( event, ui ) {
      $( "#interest" ).val( ui.value );
      interest=ui.value;
      mnam();
    }
  });
  $( "#interest" ).val( $( "#mySliderinterest" ).slider( "value" ) );       
  interest=document.getElementById("interest").value;   
      });

      $(document).ready(function() {          
      $( "#mySlideryears" ).slider({
    range: "max",
    min: 1,
    max: 30,
    value: 20,
    slide: function( event, ui ) {
      $( "#years" ).val( ui.value );
      anyears=ui.value;
      mnam();
    }
  });
  $( "#years" ).val( $( "#mySlideryears" ).slider( "value" ) ); 
  anyears=document.getElementById("years").value;         
      });


      window.onload = function () {
        var chart = new CanvasJS.Chart("chartContainer",
        {
            title:{
                text: "Breakup of total payment"
            },
            legend: {
                maxWidth: 350,
                itemWidth: 120
            },
            data: [
            {
                type: "pie",
                showInLegend: true,
                legendText: "{indexLabel}",
                dataPoints: [
                    { y: 3000000, indexLabel: "Principal" },
                    { y: 2175498, indexLabel: "Interest Payable" },
                ]
            }
            ]
        });
        chart.render();
    }

    function mnam()
    {
      var r=parseFloat(interest)/(12*100);
      console.log(r);
      var n=parseFloat(anyears)*12;      
      console.log(n);
      var p=parseFloat(loanamount);      
      console.log(p);
      // var moninstallment = parseFloat(loanamount)*parseFloat(r)*parseFloat(n);
      // console.log(moninstallment);
      var x= parseFloat(loanamount)*(parseFloat(r)*(1+parseFloat(r))^parseFloat(n))/((1+parseFloat(r))^parseFloat(n)-1);
      console.log(x);

      // var x = parseFloat(p) * parseFloat(r/n) + parseFloat(p);
      // console.log(x);
    }
    // r=interest/12/100;
    // n=12*year;
    // [P x R x (1+R)^N]/[(1+R)^N-1]
    // p*r*(1+r)^n/((1+r)^n)

    // total ammount  = (p)*(r/n) + p
    // interest = totalammount -p
    // monthly = total/12 
//[P x R x (1+R)^N]/[(1+R)^N-1]