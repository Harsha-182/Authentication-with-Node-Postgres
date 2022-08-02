
  
  const PASSWORD_RESET_MAIL = (token) => `Hi, <br />
  Please click <a href=http://localhost:${process.env.PORT}/api/auth/reset-password?token=${token}>here</a> to reset your password. <br />
  If you did not make this request please ignore this mail.;<br/>`
  
  module.exports = {
    PASSWORD_RESET_MAIL,
  };
  