$(document).ready(() => {
  const allPanels = $('.portfolio-accordion > li > ul').hide()
  $('.portfolio-accordion > li > a').click(function (a) {
    const target = $(this).next()
    if (!target.hasClass('active')) {
      allPanels.removeClass('active').slideUp()
      target.addClass('active').slideDown()
    }
    return false
  })

  $('.product-links-wap a').click(function () {
    const thisSrc = $(this).children('img').attr('src')
    $('#product-detail').attr('src', thisSrc)
    return false
  })

  $('#btn-minus').click(() => {
    let val = $('#var-value').html()
    val = val === '1' ? val : val - 1
    $('#var-value').html(val)
    $('#product-quanity').val(val)
    return false
  })

  $('#btn-plus').click(() => {
    let val = $('#var-value').html()
    val++
    $('#var-value').html(val)
    $('#product-quanity').val(val)
    return false
  })

  $('.btn-size').click(function () {
    const thisVal = $(this).html()
    $('#product-size').val(thisVal)
    $('.btn-size').removeClass('btn-secondary')
    $('.btn-size').addClass('btn-success')
    $(this).removeClass('btn-success')
    $(this).addClass('btn-secondary')
    return false
  })
})
