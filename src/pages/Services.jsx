import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from '@mui/material';

const Services = () => {
  const services = [
    {
      title: 'Home Cleaning',
      description: 'Professional home cleaning services including deep cleaning, regular maintenance, and specialized cleaning solutions.',
      image: 'https://source.unsplash.com/400x300/?cleaning',
      price: 'From $50',
    },
    {
      title: 'Plumbing Services',
      description: 'Expert plumbing services including repairs, installation, and maintenance for all your plumbing needs.',
      image: 'https://source.unsplash.com/400x300/?plumbing',
      price: 'From $80',
    },
    {
      title: 'Electrical Work',
      description: 'Professional electrical services for installation, repair, and maintenance of all electrical systems.',
      image: 'https://source.unsplash.com/400x300/?electrical',
      price: 'From $70',
    },
    {
      title: 'Painting',
      description: 'Interior and exterior painting services with quality materials and professional finish.',
      image: 'https://source.unsplash.com/400x300/?painting',
      price: 'From $200',
    },
    {
      title: 'Carpentry',
      description: 'Custom carpentry work including furniture repair, installation, and custom builds.',
      image: 'https://source.unsplash.com/400x300/?carpentry',
      price: 'From $100',
    },
    {
      title: 'Gardening',
      description: 'Professional gardening services including maintenance, landscaping, and garden design.',
      image: 'https://source.unsplash.com/400x300/?gardening',
      price: 'From $60',
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        Our Services
      </Typography>
      <Typography variant="h6" color="text.secondary" textAlign="center" paragraph>
        Discover our wide range of professional services
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Typography variant="h6" color="primary">
                    {service.price}
                  </Typography>
                  <Button variant="contained" color="primary">
                    Book Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
