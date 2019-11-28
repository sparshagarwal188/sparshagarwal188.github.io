// var dictNumToId {
//   1 : 'img1',
//   2 : 'img2',
//   3 : 'img3',
//   4 : 'img4'
// }


// var dicIdToSrc {
//   'img1' : "https://lh3.googleusercontent.com/cP-N74iIjY5bwSluRL6H6yeLA6-u-AcNIxlSHEUfg1lm2gWnfDOzbntzcT0K2AYBYeSZXLw4FTL2nG5UpRtF3QOYE5D7NUlJ8jgUkfbeBwk11W5VkV4dbde6U-OIYB2BhfPCiJwg-AxnrpmEIJoZixRf3EvCl59Lzt56hbfKCNSSJD5bRy1uQbJlwHRvDrIFrHjRVhuQjomEUY7LxyfBQM70KqVGroEg8C6v4xU3QUFvZOdGjKL-u7B3scdBrim5R5jGVx34r51Gv5ZtlSNSoT3fjyuCpzheiFjTz99vMJSoOATexKxoep4sIKqRehtXUYRlakHIuVLnOfxRELcS5W-vDmovvc1hcUkG1nU2oLUBDO9S45L8l5x_-Ev_0lpceQskIJEJ7PdJE5UyJE_0OWJ51hyrlBV27J7S92Yj26Sa1KihpNSKcDNXmHtRlh6TconxHhLfVcU1SR7DomqS4CY4-f1REbhtGEjxXW3cQhf5rT9kR6vB9uxzF7TEDXKKYYO-5K0NENvkNYFJ5acqr18JvYgQ_I7c7_zDqvHsX3uALr51ErZ8wvS0RJoM3jGBBE0VQf_QkdllS6-aGfRN1umJyQS-FO5bhyeY6Sm8O6YiSUcoxmD6smygY1CyABEE41RTKLC5mkc0Lo4q8jZwFg_qNQyx8XZwJkQX3jUPH8jIgx8k5GDtEiz1u24BdjspLZL_op1gK6kDZnl301Ez4Vag5n9jpZR4_EvABq02WHP2470QEw=w1170-h927-no",
//   'img2' : "",
//   'img3' : "",
//   'img4' : "",
//   'img5' : ""
//   }



document.getElementById('img1')
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


// img1 = "https://lh3.googleusercontent.com/asIQ7d9ezNj8UhSz0e32VA7MKbSKnZ8bxgwK1xwHd7SCGTP9_q8fxrkQ4_22HIHfTzYqUi2k9RPerdoQ6kl10DybrdTRWaQLYDXWtIKns9IOMJlszdY0ERkEWv6p0g7FXX8NmNCSlot_vJ-p5cROV8eBh8CH1Q7bv3pLehuez-P3GhMmMFtIfPuV1xeAeN3dObRkFkzEoGLLo7cCGGMcLM28a_954UeudD7oKSKRW1wShyvsju5GYdj3jjzCEOX2yUnJcZBrqc0RrKyp-xz7hPWs2_vxzGG7N_BD9m80J3RmryDBto_a_XHNCcdKWEAMxFVZU3jLD-eouFHo3-CkB_qUeACRcRk9a5xPxt5An11kZk_TXPyLjdCEzEoxeXwFX3w9nXtNphw2OgM5hgR-x35_jjKqjepholpx3gyVgMPn8vKxJNiu2xGQM3cufMUewslouYU9bx8SayNU1p-1YLa3wdIrJFTOBbqe90AnTKKG2p40WhDZ2WBM0lM4EABF83F8U20yk55rZ70hjTqYzVxyb0tp31mfvq08yz0H9UNNcWWIfvMPWXo3mZeyzJstYlP6Jcv2n6vBWseRxwHzWqMStwmF0fIHHLkAnQcl3LhUc4rvKrpeg12uasBGgSYHGVyDwGS4caSNiy-9J7afoAs18pM6AVR9K8FCEuIJTvKKJdXVww1gN7CuMJDCgjazrH_yB9S-RF4Dvg4xbsVEn1teE_4jP3qiSPXxyymRmiQAB7enfA=w1318-h927-no";
// img2 = "https://lh3.googleusercontent.com/91UUIay5QmFfAqhRQppFPqoHa4KJ_wNH_-jBvkohhyVGne4yYrIDsyBSeCq_Yo0lL0eKeqUXPgfW88uKR1fUP4tt7kwB_UYvl0t9vP2onAppRJXMo6tUSefI-c69c40TdReqnE49LprYTi1Rjq4_S47pmzKW3pEPchiwUUkDMh8KRhpRLfP61jCfurc1EOqqKaHmOPyN1c_B2nNBhzD7CtzT_b1RRfNj3dhqMcMgrmDoDSjJoQppwUn-UP4XkDemmQjnUxn1EMYO4uxhRJokT6RmbcFVFAroOzIDM4C8yE1N67EA5cA427fkckKH_hJaYVRKdhZDayCXH3YFzGJBqQ1eBc2c1n8BX25An-EZdHYazEfLpY-_OkIpR5zV8U8lN68GnV63Nd8SS1C0s4IWeMhYP2lBZVCh4d9lUVdfBppAFOfJ0fGni22RxU8jmePLvPKy-Lw4UdM1cGwOnTmHK9r0HRzUhy9R4HOnC9n2lmwrHUgv842d8cKY-QNGoJfYY6q4v08PXB4V2r489X32KIGQn0wv_lF3uX-_CEGew3msH_YS5nRoGzMv8fSPPtsNKmiak2bf03Fx6RpdhtpzQnrCE2niLQ5oR5l9Z-rvYSo-dAVZj9e-NSAYxhMXnLIj2Fj6C9lETgTZaJCjkrOnF4B4ITnZwWZYeM5Rv3buLoAk0EvPerJ_3sUT=w1235-h927-no";
// img3 = "https://lh3.googleusercontent.com/xweEa7o-VTWS2fqymqT9QXMhngxL2wYh-f3lz4VMmxwrnVyZMQvxGZK_0YIJC9ajV_nu2BShZC5BpSXq51w39ryYYZZ-MoTeVBaC4MKPxidHoSo2x8agOpdwBTFtTYyYbyJp4oIc0QxEsl9tnyk3m0XFdjs-ZqS7kJcYUF8Vn_fN4vXfjf7OWxU-Y_9tVDPIV7LX-ZbzDtzgZ6YWEBvSYc_-N2VC0X0Ju7jCHCoZQ3NJKrRu0svs9DEWYmt16fojyWOs3LKnIBx8d8tFnpVWBLs-9gogGQJ0Oihwjex43X9p94PhyuvQbXn6vEarPcMwgFsI5v3xUjNIYwDg8EQ0il9Ce6DKAY2tozZGeFg0zO43-6bzMvu5GDMo-LJj8BxAbsnkoMj7MDQFVV5wkO61m2XouoOi6b_A5ErsTS7OpBEoot4XZuY5s4Weg6TXL_mCZ6GkmKluy3vy7MEiqquVD2yjD9ruUF0bPdVgETRry4i5_nZvOylbxBvEGZE_cXV0jpL7sGoSpbfz7Q15m2SANAeDmTi5g55dtXd0qnFKTu5JBit2qd1hz2F0dcFXDAzZm59_Nqa_29DjcFEtf3sxeblvbMVNfAK58V5Mt_JEOCJvtF0-ZnDWfma1Vdl2oOQFG-MSxr-kx1soZQYO3iSUnZLC-dOPURZsY9TRXbMCx337LIRFYcrsJ15P=w1235-h927-no"; 
// img4 = "https://lh3.googleusercontent.com/OjRObJGcKA-sabfmvx2IRGWy0ddv6uxM98CJpT9UJM3RPUDuMNbJzfuJ5dEUq5E2bZc-xy8eNbuhqrDtLNHFRT3kmIN_bZIozNozfV70Viq9dxhPem57RQa61w6hGiwLn2R5HlB-1au2AdfQbd1m-EReXXsfOkhjsYTOKpOqXeVrg-ZFWjeSQJnKjcO0b9ZEWzJtG4FMzrVMprWjFalZazqGkXxVI2ch-W_p06AfUnZFP9hgpK71RnxSmAInewX_XUxqFmNozccA85BNfyJsVOEmDCDvyFmkXu1-CSKwu_iTtvceVOK6bgwZLM1BDdSQby5573-We5y1gCRPcbX0W7-nMw6uTtNjwAVFJ6TOaN3Cxnj_WRlocU6RhCgb_0iGqxHRRQw2-QTJUT0spahn3JQeSJr16Pd792VdkTuOicnw5eCXYxWQ_5QOIp9reCxyiFKmzoPOLyvxro0WeRtEBz0X3JpWnmNYMRjOrkqGgwIpFmcEbpednzEfaswB23VBGJXsjSH-EDZUKlwF86xWy7RFynyofbGXHXi2_q53kDtnODoTmkkI42PQ--PdFNYfzkyjaypVzmOK85r3t4E2311Q98bvyW-qbWHoo_3HeAsiosZGakRd3ALMa_tHCknRAMnM3KKwiOVQKhQ2v_4BEW67tQGiWpF8Xotvc1Bp9Yf-2Y2uvVGFzCvmSCUnCOQdwGH0hwfg4SUZwrFELLEFIjhWv2tSnVdzfRUwTPJ-RX7Z-9oP1w=w1235-h927-no";
