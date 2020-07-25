console.log ('connected!');

$(function () {
    $('[data-toggle="popover"]').popover()
  })

$(function () {
    $('.container-popover').popover({
      container: 'body'
    })
  })

     $("#myPopover").popover({
        title: ``,
        content: `<p class="text-center">Donations may be sent to the Gorham Parks & Recreation Department. <br>
                      33 Exchange St Gorham, NH 03581 <br>
                       Donations are tax deductible: EIN 02-6000335</p>`,
        html: true
    }); 

  $(function () {
    $('.container-popover').popover({
      container: 'body'
    })
  }) 

$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      700,
      'linear'
    )
  })