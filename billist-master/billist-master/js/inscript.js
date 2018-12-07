$('#data').click(function(){
  var billname = $('#addbillname').val();
  var price = $('#addbillamount').val();
  var description = $('#addbilldescription').val();
  var totalb = 0;
  //if is empty something happen
  if(billname == '' || price == '' || description == ''){
    $('#alert').html("<strong>Warning!</strong> You left the to-do empty");
    $('#alert').fadeIn().delay(1000).fadeOut();
    return false;
  }
  
  var cardcon = {"cards": {"bName": billname, "bprice": Number(price), "bdesc": description}};
  var myJSON = JSON.stringify(cardcon);
  //localStorage.setItem("mylist", myJSON);

  //add to list
  $('#todos').prepend('<li class="list-group-item container-fluid">'
                      + '<div class="card container-fluid">'
                      +   '<div class="card-block">'
                      +     '<div class="row">'
                      +       '<h3 class="col-sm-6 card-title">'+cardcon.cards.bName+'</h3>'
                      +       '<h3 class="col-sm-6 card-title text-right">' + "Amount: $" + cardcon.cards.bprice + '</h3>'
                      +     '</div>'
                      +     '<h5 class="card-text text-center">' + cardcon.cards.bdesc +'</h5>'
                      +     '<div class="row container">'
                      +       '<div class="col-sm-6 container"><a href="#" class="btn btn-primary">Done</a></div>'
                      +       '<div class="col-sm-6 container text-right"><a href="#" class="btn btn-primary" id="delcard">Delete</a></div>'
                      +     '</div>'
                      +   '</div>'
                      + '</div>'
                      +'</li>');
  

  //adding total value
  var i, u;
  for(i in cardcon){
    u = cardcon.cards.bprice;
    totalb += u;
    $('#totalb').val(totalb);
  }
  
});

//if is something in local store
if(localStorage.getItem('todos')){
  $('todos').html(localStorage.getItem('todos'));
}

//delete one bill card
$('#delcard').click(function(){
  //TODO delete one card at time and reduce the total amount.
  delete cardcon.cards;
});