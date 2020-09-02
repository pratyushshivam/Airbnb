import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import swal from 'sweetalert';

// ES7 snippets to do 'rfce'

function Home() {
    function handleClick(e) {
        e.preventDefault();
        // swal("Functionality coming soon!")
        swal({
            title: "Pratyush Shivam",
            text: "Web Developer | ReactJS",
            icon: 'https://img.icons8.com/plasticine/2x/user.png'
          });
      }
      function handleClick2(e) {
        e.preventDefault();
        // swal("Functionality coming soon!")
        swal({
            title: "You need to log in to buy!",
            text: "Redirecting you to the Login Page",
            timer: 2000,
            buttons: false
          });
          setTimeout(myFunction, 3000)
          function myFunction(){ window.open("/search");}
      }
    return (
        <div className='home'>
            <Banner />
            <div onClick={handleClick} className="another">
            <div className="hone">
                <h1>Get the best components ever built in!</h1>
            </div>
            </div>
            
            <div onClick={handleClick2} className='home__section'>
           
  
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div onClick={handleClick2}  className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/night"
            />
            </div>
        </div>
    )
}

export default Home
