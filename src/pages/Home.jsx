import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

const Home = () => {
  const featuredServices = [
    {
      title: 'Home Cleaning',
      description: 'Professional home cleaning services',
      image: 'https://source.unsplash.com/400x300/?cleaning',
    },
    {
      title: 'Plumbing',
      description: 'Expert plumbing repair and installation',
      image: 'https://source.unsplash.com/400x300/?plumbing',
    },
    {
      title: 'Electrical',
      description: 'Electrical repair and maintenance',
      image: 'https://source.unsplash.com/400x300/?electrical',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Your Trusted Service Provider
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Quality Services at Your Doorstep
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
          >
            Book a Service
          </Button>
        </Container>
      </Box>

      {/* Featured Services */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Featured Services
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {featuredServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom textAlign="center">
            Why Choose Us
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  Professional Experts
                </Typography>
                <Typography variant="body1">
                  Our team consists of certified professionals with years of experience.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  Quality Service
                </Typography>
                <Typography variant="body1">
                  We guarantee high-quality service and customer satisfaction.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  24/7 Support
                </Typography>
                <Typography variant="body1">
                  Our customer support team is available round the clock.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
