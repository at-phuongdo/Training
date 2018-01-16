OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '2068048373431539', 'd26c20e522502dcf57b2516126a38c4c', {:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}
end