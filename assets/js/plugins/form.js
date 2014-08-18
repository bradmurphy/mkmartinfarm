$(document).ready(function(){
	$('#send_message').click(function(e){
		e.preventDefault();
		var error = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var message = $('#message').val();
		if(name.length === 0){
			error = true;
			$('#name_error').fadeIn(500);
		} else {
			$('#name_error').fadeOut(500);
		}
		if(email.length === 0 || email.indexOf('@') == '-1'){
			error = true;
			$('#email_error').fadeIn(500);
		} else {
			$('#email_error').fadeOut(500);
		}
		if(message.length === 0){
			error = true;
			$('#message_error').fadeIn(500);
		} else {
			$('#message_error').fadeOut(500);
		} 
		if (error === false) {
			$('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });
			$.post("send_email.php", $("#contact_form").serialize(),function(result){
				if(result === 'sent'){
					$('#cf_submit_p').remove();
					$('#mail_success').fadeIn(500);
				} else {
					$('#mail_fail').fadeIn(500);
				}
			});
		}
	});
});