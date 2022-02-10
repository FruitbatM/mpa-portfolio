// Send email function (adapted from Code Institute walkthrough project)

function sendMail(contactForm) {
    emailjs.send('mpa_dev', 'template_g28czrg', {
      'from_name': contactForm.fullname.value,
      'from_email': contactForm.email.value,
      'subject': contactForm.subject.value,
      'message': contactForm.message.value
    })
  
      .then(
        // Sweet Alert custom pop-up alert if success; credit: https://sweetalert2.github.io/
        function() {
          Swal.fire ({
            title: 'Thank you for getting in touch!',
            text: 'I will get back to you shortly.',
            icon: 'success',
            confirmButtonColor: '#3085d6'
          });
        },
        // Sweet Alert custom pop-up alert if fail
        function() {
          Swal.fire ({
            title: 'Ooops...',
            text: 'Something went wrong.',
            icon: 'error',
            confirmButtonColor:'#3085d6'
          });
        });
  
      // Clear the form
      document.getElementById('contactForm').reset();
      return false;
  }