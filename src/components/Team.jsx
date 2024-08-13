import React from 'react';

const TeamMemberCard = ({ name, title, imageUrl, description, facebookUrl, twitterUrl, instagramUrl, linkedinUrl }) => {
  return (
    <div className="card mb-4 shadow" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{title}</li>
      </ul>
      <div className="card-body">
        <a href={facebookUrl} className="card-link"><i className="fab fa-facebook-f"></i></a>
        <a href={twitterUrl} className="card-link"><i className="fab fa-twitter"></i></a>
        <a href={instagramUrl} className="card-link"><i className="fab fa-instagram"></i></a>
        <a href={linkedinUrl} className="card-link"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: 'Nikhil Kaushal',
      title: 'Founder & CEO',
      imageUrl: 'img/team-1.jpg',
      description: 'Leading the company with a vision for innovation and excellence.',
      facebookUrl: '#',
      twitterUrl: '#',
      instagramUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Jane Smith',
      title: 'Co-Founder',
      imageUrl: 'img/team-2.jpg',
      description: 'Expert in market research and data analysis.',
      facebookUrl: '#',
      twitterUrl: '#',
      instagramUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Emily Johnson',
      title: 'Executive Manager',
      imageUrl: 'img/team-3.jpg',
      description: 'Overseeing daily operations and ensuring client satisfaction.',
      facebookUrl: '#',
      twitterUrl: '#',
      instagramUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Michael Brown',
      title: 'Digital Marketer',
      imageUrl: 'img/team-4.jpg',
      description: 'Specializing in digital marketing strategies and campaigns.',
      facebookUrl: '#',
      twitterUrl: '#',
      instagramUrl: '#',
      linkedinUrl: '#',
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="fs-5 fw-medium text-primary">Our Team</p>
          <h1 className="display-5 mb-5">Our Expert People Ready to Help You</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <TeamMemberCard
                name={member.name}
                title={member.title}
                imageUrl={member.imageUrl}
                description={member.description}
                facebookUrl={member.facebookUrl}
                twitterUrl={member.twitterUrl}
                instagramUrl={member.instagramUrl}
                linkedinUrl={member.linkedinUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
