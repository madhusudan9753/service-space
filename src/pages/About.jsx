import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';

const About = () => {
  const team = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      image: 'https://source.unsplash.com/300x300/?portrait,man,1',
      description: 'With over 15 years of experience in the service industry.',
    },
    {
      name: 'Jane Smith',
      position: 'Operations Manager',
      image: 'https://source.unsplash.com/300x300/?portrait,woman,1',
      description: 'Ensuring smooth operations and customer satisfaction.',
    },
    {
      name: 'Mike Johnson',
      position: 'Service Head',
      image: 'https://source.unsplash.com/300x300/?portrait,man,2',
      description: 'Leading our team of professional service providers.',
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      {/* About Us Section */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Your Trusted Partner in Professional Services
        </Typography>
        <Typography variant="body1" paragraph>
          Service Space has been providing exceptional services to our customers
          since 2015. We take pride in our work and strive to exceed expectations
          with every service we provide.
        </Typography>
      </Box>

      {/* Mission & Vision */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                To provide high-quality, reliable, and affordable services to our
                customers while maintaining the highest standards of
                professionalism and customer satisfaction.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1">
                To become the leading service provider in the region, known for
                our excellence, reliability, and customer-centric approach.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Team Section */}
      <Box>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Avatar
                    src={member.image}
                    sx={{
                      width: 120,
                      height: 120,
                      margin: '0 auto',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                  >
                    {member.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
