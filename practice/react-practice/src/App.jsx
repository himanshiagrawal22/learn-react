import React from 'react'
import './App.css'
import Card from './components/Card'
import Miniproject from './components/Miniproject'

function App() {
  const jobOpenings=[
  {
    id: 1,
    brandLogo: "https://cdn.simpleicons.org/google",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    id: 2,
    brandLogo: "https://clipartcraft.com/images/amazon-logo-transparent-smile-5.png",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$40/hr",
    location: "Hyderabad, India"
  },
  {
    id: 3,
    brandLogo: "https://cdn.simpleicons.org/meta",
    company: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    id: 4,
    brandLogo: "https://cdn.simpleicons.org/apple",
    company: "Apple",
    datePosted: "2 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    id: 5,
    brandLogo: "https://cdn.simpleicons.org/netflix",
    company: "Netflix",
    datePosted: "1 day ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    id: 6,
    brandLogo: "https://th.bing.com/th/id/OIP.zDfdVzAl1LG6wAj2VBBOmgHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    id: 7,
    brandLogo: "https://cdn.simpleicons.org/uber",
    company: "Uber",
    datePosted: "6 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Gurgaon, India"
  },
  {
    id: 8,
    brandLogo: "https://th.bing.com/th/id/OIP.fXseQpdszZQM0ZjXRHrTygHaHa?w=217&h=217&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    company: "Adobe",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    id: 9,
    brandLogo: "data:image/webp;base64,UklGRvoEAABXRUJQVlA4IO4EAADwKwCdASoUARUBPp1OpEwlpKQiJjIYYLATiWVu4XHhCB768P4PTeL/XvTmD0G+hvzAP8P0H/MB5tvpZ3nf+fepnZRXps0GWfpNWbd4AMqsqZNhgTsgJ2QE7ICdkBOyAnZATsgJ2QE7ICdkBOyAnZATsfAyoeTxH4A4YAty13pr4IsztdAOhHbvPQWesOAoVl93ot1SJDaOKSAmNKPHh3dVgBuv3MkMBSGyNhgTpw8J4cGcQmF86QhfacO+fsUE4hnefSQSoGBOx9BhHy6RsbBlUxy4iImblmESFzXyqeWVMmKnJnitpceMMRFpFPyQRobDAmNOTPFbWl6wdQUZge1lMyL/H+FxXPD5beDikJ1LGl9mtnr2+mP9qIwa3R40MCdiBTTni7jPK/EkOXpr/2xzrvPTeKb6iBCvRr8t25yJkAtC2d+MCdkBOyAnZATsgJ2QE7ICdkBOyAnZATsgJ2QE7ICdkBOyASAA/v69EAAAAAC3tXZ+ToQwsp+PAxjLj981nLXu/2nlDXSin9aZ9U25yMUb/CPkxNZ3fs5ynVMsNYvTPwHufK+vlVFgCDvY3wCGRzbvvcFiz1U3plR9ULb2ONX7L73EBFz22peNcZSn1YrEaUFAM6PO2bjgSR08b9xjf77Hq5lOsrW9UjpLKy9dkbOiL3Cd7390cz826GkKF/8V0qMBTeWAyzcNPGuH4ACzX+k+qzrR3279mrB2kC+wYPucx/4i74xtji1vDrb+t9dEoe0M2P0zyISWhdkd+/WeJIfFAaYNWjIji+WKmxg4+WTDsiOY2nb6okRsKr2YHg3x511M5+Iqy8yvypH7UgI4C6IIurB9lEeiNkdAsxFoEDzz9myVmRlSkzNdON88s5ESb2FFw+qBSRsACyDM8IuhqBWfy1h+8Iy0selzfe1gH34romSutpp5p2NfzBRYkjyxt28QD/Pnr97oF7yI9TOenQdSv8Be7yh3Wd9DjVTRAKgAal60nAnVlLEC3kbtuAegu0jl/nihkRfa3pNsfFPknb6bqQrIjpwDkU+JuSV0w162vTiT6OckhMj2gl5acxyG+IZ7cYxBCVip754k8pSKRKPygKRXwhQ6tVgeXue0MuuGqCAk+2oGhw4yF9yUsoGgm98qDxkJaLNsgGlssvOHUTOM8hNznZVH2EIkJN6w49btfPozq0uhQf2U6w7bJD/e/iqPrrkwuBpLGaaMqLJ//8IMxSB3RpdIsbjtMHo8k+/G6jPPZ4uD5Y5uQB6+h+qAUYO6kuegbkLpfyROsRODgLx7qHSoTGGJS8rm37Sc1cxmK73V+kEaMQwyrhoKXSEPcsQ/stoHXhTI+w1n1qQwP7RKVwG4/Bpg59Ts/mn2y58YE74AGnqFtf7wXaH9zP3HoaYYTSCer3ryRG+i6fWRnShluC0upWp2lA8DU3zKxo3Jm6AM/609g0H1+VGdKMGhIM0L2BR/P8OPWEFKl5FbwWfiRNKQbauvkddJQTtPT9ruSkzNhJOEWWpg8WBqSz8WeOwgH/8lf/ua71HMZ/w8fVpJ+eEa01qoFg9ZukSNm3qH8YbAOYcZkpa1LQ4PUUCu/324DeWefHqxlw7YlsQJXsatvYmmq90gCiiqojPt0jj4Ly53VtSaSv6eP3W9uPO0vmFDTDnbytkln4LXa6bx1yNec3CgAAAAAAAAAA==",
    company: "LinkedIn",
    datePosted: "2 days ago",
    post: "Product Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    id: 10,
    brandLogo: "https://cdn.simpleicons.org/tesla",
    company: "Tesla",
    datePosted: "3 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India"
  }
];
console.log(jobOpenings);
  return(
    <div className="parent">
      {/* <div className="div1">
        <h1>Hello React</h1>
      </div>
      <div className="div2">
        <h1>Hello React</h1>
      </div>
     <Card/> */}
     {jobOpenings.map(function(elem,idx)
     {
       return <div key={idx}>
        <Miniproject brandLogo={elem.brandLogo} company={elem.company} post={elem.post} 
        dateposted={elem.dateposted} post={elem.post} tag1={elem.tag1} 
        tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
        </div>
      })} 
   

     {/* <Miniproject/><Miniproject/>
     <Miniproject/><Miniproject/>
     <Miniproject/><Miniproject/>
     <Miniproject/><Miniproject/>
     <Miniproject/><Miniproject/> */}
    </div>
  )
}

export default App
