/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Jorge Mejia
      Date: 10/25/25

      Filename: project02-02.js
 */
 
function verifyForm() {
      let name = document.getElementById('name')
      let email = document.getElementById('email')
      let phone = document.getElementById('phone')

      if (name && email && phone) {
            window.alert('Thank You!')
      } else {
            window.alert('Please fill all fields')
      }
}

document.getElementById('submit').addEventListener('click', verifyForm)