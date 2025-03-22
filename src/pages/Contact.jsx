import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        textAlign="center"
        paragraph
      >
        Get in touch with us for any questions or concerns
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Box>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Contact Information
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>
                      123 Service Street
                      <br />
                      City, State 12345
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>(123) 456-7890</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>info@servicespace.com</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Send us a Message
              </Typography>
              {submitted && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
