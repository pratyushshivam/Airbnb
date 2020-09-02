import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

function Header() {
    function handleClick(e) {
        e.preventDefault();
        // swal("Functionality coming soon!")
        swal({
            title: "Pratyush Shivam",
            text: "Web Developer | ReactJS",
            icon: 'https://img.icons8.com/plasticine/2x/user.png'
          });
      }
      function handleClick3(e) {
        e.preventDefault();
        // swal("Functionality coming soon!")
        swal({
            title: "Still Working on Search 😭",
            text: "Pratyush Shivam",
            icon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQEhAVFRUWFRUQFRUQFQ8VFxUVFRUXFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAD8QAAECBAMECQIDBgYDAQAAAAEAAgMEESEFEjFBUWFxBiIygZGhscHRE/BCUuEUI4KSovEVU2JyssJD0uIW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIREBAQACAgIDAAMAAAAAAAAAAAECEQMhEjEiQVEEMmH/2gAMAwEAAhEDEQA/AKuWjUA5D0Utk3W1VS/tjXNGU7B6KJJxSH1c6y92vPvtpXwiVGdLu3KxkIrXixVtDlm0S8irJRYBUOLAK3ESWZuVROw2jRLY2yEeEQorwr6baFVxWKoNoSrcTj/gHf8ACspyIGNLvDidizz3VNTzWXNnqaa4TfbiEIXM1CEIQAhCVDh5iG7yB4miAShdc2lt1vBcSAQhCYCEIQAhCEAmIaBMpcVIUZU4EIQpMIQhBBS5KPTqnu+FEQqwyuN3Cs2uUKPLxaj1TtV3y7m2GtERNUJLzdCla4kWnKL7B6KwbLVuoEpEoByHop8KYCLUVZSUTJoraHiJoqBkcJ4TI3qbaleCeJ1KiTUSu1Vjpwb0xEn05T0VMR6KvixV2PPAqHEmAtIWlficxmOXdfv/ALeqgpUR1STvNfhJXHllu7dEmoEIXQkbiFcYrhWTI1gJcRfU1O/hoU5JdHHuu8ho3C5+B5pXo536UdFYYLLl0VtqitSd1ASK94C00vgUFurcx/1X8tFYshgWAA5KbVTD9ZGbwSK6I7K22YkEkAGpr7pUPo3FOpaO8n2WuQjavCMuOjDv8weB+V3/APLn/MH8p+Vp0I3R4Rl3dGHbIg/lPynX4ZSXdDNMzHG42k9YeTh4LRrP9J5d+XO1xAqC4CvIH08E5l+pzw66Z90jEpmyGhvUUNimHMI1BHMFa/o3MB8EA6tq014fpQpWKybQMwG26XlT8GGiG6StDEk2O1aFEi4UPwkjzUbLxVKE7NS5hmh26U4f3TIKZadQhCAEIQgj8o+hpvU9VTDcHiFaBdXBluaZ5zs2/VCH6oWpJcuTQch6KUyqXIy1QLbB6K1bJgCpCdyiL7VJiEJp82QpMzQFV8VE0RZnSmnzBKQGJ0Qk+gYLymo7rHw8bKU5ijzQt3j59ks78aeM7RUIVjgmH/XcQSQG0Jpqa108Fx2t5NocCA55ytaSeHvuVzDwMw2/ViO7NHZW7gamp22WklZRkMZWtAH3qqLpNiYp9FpqT2qf8eZ+9VO1+Op2XhE+ZiLmy0DW8Npt36rQqq6PSH0od+07rO4V0HcPdWqVu+1YzUCEIQoIQhIBCEIATcxCD2lpFQQQe9OIQbGyEYyscsd2ScpJ/pd5+Z3LVTYzMPKqrOkeG/UbnaOs3dtG0c/vaofR7FrfQiG+jSdo3JonXVJQlPFCQkqTVeNCzTxp4j9FVUVxjI6o5+xVQiIy9hCEJpCEIQbrNRzCv4cKyo5YVe0cQfC/sr4VXRwfbLkR4sMVXVyKDUoW2yek4VhsINaDuHorGZwyGRYrNS+KtAF9g9FayWLMdqVlZU67Rprow19w5Uk50XI0K2bsUhDaokXEoR2qplQwcTCHt1SRLkbFrJyfhKE+bhlXKTPOlDuUHEZYhteI86j3Wp/aGFQcTLHMc0akW57POiMu4cvbJLS9EyOv/D4db9VmnFKhzTmhwaaZqA020rT1K5K3l1WmxvHg2rIZqdC4aDlvKjdHsJLyI8TStWg7T+Y/fFcwLAS6kSKLbGH1PwtU1tLKWkm+66AhCElhCg4hikOCOsb7ANT3J6QjmIxryKZhmpuB08qIJIQhCZmDOMzFhcA4bDY30I3hOfVG8KvxvDGxmadYXafbksg7D4mlR4lJO9N8Y7fzDxSDOw/zt8QsH/hjztHmltwk/mHgjZbv43Bm4Z/G3xCyuPyLWn6kMihNTQ9k7xw9FFbhO9x8AnBhbd58keQu6RK4ga5Xn+LfzViCqibksul2+YTEOZezQ1G43Ss+4UuuquJuBnaR4c1n3sIJB1FlfSc0HjZXcmcRk8wzDUeaUOzamQhcVIdQnYMu5+g79iXGkntFSLcEDRzCYdX13An29yrwqowq1Tvt4f3VgYq6+GfFjnezcbUoTUV10KgsIJsOQ9E62IRoUmDC6o5D0TwgpbKkmO7eufWO9Pfs64ZdHlC0ZMSqUKLroCRkT3BouoTMxGa0ElKLVRYhM5jbQafKnLPUOY7RpiJVxNNTWm5Tuj7B9ZmYVqTrsNCQfJNMkD9P6h11pw+7pMtFyuDtxDudDWi59bbSvQwglM/tAyh2taUpcmulBtVfMyMWMeu/Iz8rNT/ud7DzUNi53HYUO2bMdzbqrmcRmYo/dwyxu8i/n8K5k8JhQuywV3m58Spmdu8ILVYlmGEmsRxJOuvmVtoDKNA3ABJdCa7UAp1ByaCEITAVBiTKPNNt1fqixUH6h7vRKioaTEiACpNERH0FT97hzVxgPQt8xSLNVYzVsIWJG952clP+Qt6ZZ+KgmjGF3JH7dF1Mu+m/K74XsLcOgy8J304TQGtc6gAFaAm6lwZRrWBtK0Gp2naTxJun4X9R5vE4WLsNnAjmiJLNf1oZHLZ+ildLmwBNRWMpZ34dASBmFedVTGXc01YT3a/qjxyx79jzl6rr4RadoKfg4i5tnCvqpUhE+q0526Gld6THw78t+B+USynqz0rpqIHOqNvqn8Pk8/WPZ9f0TEWBSxFDuKXAmnw7DTcflFlKVeWaNwSXRDtbbnfmQo8nOB5vY7B8b1LJBqO496laEGZatA4jkfs+C7mT0w24PMe/sfFcDF28Wfxcuc1UR5uupcVl0KthpoEvRoFdg9EsQOK7Ah9Uch6J8QwsdtPGGfooEOik5QjKEDxRHwgU0ZcKeWBJLAjY8Yz+M0Yyg1d1fny9VSyED6kQDYLnu+wrLpJEGcNGwV/mP/yjovDFXuPAep9wpvdEiwdL2os/OQMjqA21FN27uWvyBzg06XJ4gUt4keacm5GHGZSgO0FtLcQU8qeOCJ0Zmc0LKdWHL3ajyt3KbieJMgNzOPIDUncAs5hDzBjljrV6h56tPL/2Wl6GYSJiNEmZgVdDifThsPZYAA4O4khwusr+RpL0hS+Dzc00xorzLwQC7KO2WgVqd33ZXcn0AgfTaYhiF+UFx+o8dal9OK1WJM/cxAB/43gDm0hVkx0mglp+mc7iLBtfM7AqnGyud28xn2RJaM+HDjO6riAHHMCBpY8Fb4VjmYhkVuV2gI7JPsVjJqJEfFcX1MRzzXfmJ0WqlJB0KLCJpd7Rbnf3TwmOe9daO5XBpUICFLYJEWEHChFUtCAThUrDhxWvIrQ7b04jit03Syw6usKxYNGR+g0PsU4jKfa1xRhdBiNbqWPaOZaQFlIPS6JEaWNhDPS5J6o4017lpP8AGIJtmPg74WOxeWEOKY0A5muNXMFbE60WuGvVYZbncYWawSYMVzchcS4nPsNTqTsV5FwgwsnWrVzW8Rx8lfCdFKljhS/ZKp5qdMR1ctAAQ0E77EnuqjHDHj3di3LPU0iQoQaKBLQhczpV2LQ65f8AcB4puYkadm/A/Knx2VLeDq/0n9Ep+o+9n90S2CzbPPh0+7hSpSeIIDjbSvDj30VhOSocKjX14FUsRlPvRV1Ud4r6KalvP/q5OZVVYZHqQ0nQGn34q3XRwz4suS9okUXXURtShWUehy+EAgUOwKfA6M5tqrZPESAOQWlwbFgSAVz8lyk3HbhjhkZZ0LJ2lDuhDt5XoOGxGuAU98MUXnX+dlLqwZcerp5PF6HuG1QY3Rshej4u8NBWOxHE6VC6+Dmy5Ppd4cJO3kHSeFkmIjPy5R4sa7/srPoPKB7X12OHoofTA1mHO/MGu8sv/VL6FzWV72V1AcO4kH1C3ntyXW1/i8plBAOsOIP+Kp5Od+k6/ZcaEbj+byvw5K8xB2anGrP5hbzDVmYo64B3O8RQe5UcnteKyx6QzgRmdptDbaBcd4N1oujOKANa+nVeGk8LfYVFg8xb6R2CreW7uqO7kpkmwMLmDSucDcH1P/IPSlPx23Rm4ZHbbQ8QsHNy4lorstHQnmoy3LeBpsU2q4Vpjn4s8uLaMBCJzhoLt4bU+iZENz4ge5pa1nZBpUnfwU+iE7y/kE4Z9hC5mvTv8KfIXVm2CEIQAhCEAIQhBEvbUUWaiNoSNxIWnWenxSI7n63SoqOhCEiCainQcQe4Gp++KdTESESa1tSnHbpuSpuueXWbyJ+N5UHEJYAAjkeO2qnue1gvQAJ2FL5mlztooBuafcp4Y21OdkjMscWmo1BqtXBYHAHeK+KyZFCtThBrCbyp4W9lvxXvTHM1HhDMfvYhPTA6x7vRC13EruC6w5D0VhIvIIoVUwYthyHopcvMXss41xuq9O6PzjqCqv48/RqwGCYibK/izgLblebz/wAbee3oY5zSux3Eya3WQm4xJuVbYxGFTdZyPEXoceExx1HNy57U/SWWzMzgXbf+Hb89yzMnMfSitfuN+Wh++C2zzWyyGLSX03UGhu34SrmbAxQ9utiNR5EKumpYv6wpnbqNMw3t8u+yrMAxKn7px/2/Cuol71odQRqDwSs8oeN0gS8TLEaXWob1sQCCL8Lq8c8ZmOBqHVbbQ2zA/wBJ/mUIxWO6sUDg8W8/wnyTrJMQ2OyuLriIBb8NDQc6U71nrTWXayQuMNRVdVGEIQkDDDV5OwUaOep7uz4FP1VRiDYjCS0nKb2/CTrXhXbxUD9oedXHzQGhiTLBq4LsOYa7RwKzL211UuRknOuLDf8ACNhfoXGNoAF1BhCEJgKgxI/vHd3oFfFZyafV7jxKVTTSChMzkXK0lSEJuJNDnA111HAAeoK7FxVv4QTzsqc8UI0nZ+PMOeak8hsCsMOxPIxzXbBVvwqi66Aql16Te/bq2OGQ8sJo/wBIrz1KzeFyRiOBI6o148FqmuWmH6jJHmO0e70Qmpl3WPd6IVbGkuDE6o5D0T0ONRQ4TuqOQ9EsPRD+2hw+eorGLiZpqstLRqKW+Zsr1tvjn0XNzpJ1UIxqpmLEukB6VZZXdSMyYm4Ie0tcPveu51wvUoZedlCx1O8Hf+qssMxPN1Hm+w7/ANVNmoYeKELPzsoWX1G8e6i9G02YJINLBxA3AkDwVBJ4mW2fcb9o+VbQ4wcKg1T3KPS9weJWGG/l6ncOz/TlU5UOFR8sTLscKfxCp8xX+UK+UNsbuBCEJKBCjRpFjtW+CkpqLMNaaHXWjQSfAIIxCw1gNdeamAJgRzshu78o9136jvyeYQZ5CZMV35D3FqVDi1tlI5j3CYOIQhBGJyLlYT3DmVnVZYxHqQ0bLnn9+qrVNKhU+LTFTkGy557FZxX7BqdPkqqxWHlLeRv4fKX2V9IK5lXUKkE0UrDoAc8A3FyR3f2UdSMOjhr76G3Kv9kBpoYAFBYJdVGD13Mtdo0RHPWPd6ITEZ3WP3sQls9JULsjkPRONTMJ9hyHol/UTlCTCKdfEUIRV0xlp5QbpxxSapsvXMyVsB2qSXJsuRVQHSUlwqiqTVIK+bw4G7bHds/RQOvDO0ehV/mSXgHWimwbVcPE3DUaXBGoI0K12C4u2M3c8at9xwWaiYew6W5JuHJOY4OY+hGhS1VY5ab1CqMOxWtGxaB2lR2SfYq3BSay7CKIQmaHOT4hmmRx5Up4kpmFimY0EN39Pyp8WEHChFUmDLtboEiOhCEJmEzNxwxpPhzTrnUFSqGfms54DT5SJHe6pJO26ZiRKWFydnudwXHRCbN7zsHylQ4dOe0nUqQ5Dh0ubk6n25Jqbhg0rvp5H3opKZmuyTu63ga+yCqjjwaOIGn6A+6ZcKKbMdo/ewKNGWmumRtcXUKTXGGTGZtDqLfBU0qnwo0ceXvb3VvnV4pqPF1+9yFyM65+9i6kZ+F2RyHolJiE+w5D0S86ZHEVSMxRmQC6oLkiq5VALzIzJuq5VALJXKpBPBFeCAVVFUmqAUApdqkVQgFkhSpTEHQ7DrN/KdnI+3ooaEUS6aeUxBkSwN/ymx8FLCxZPBS5bFYjNuYbnfPzVTppM41KFVQMcYe0C3zHiFMZPwzcRG+IQvcqSuOcAKlRIuJwgO2Dwbc+AVNOTz4lgMreNz4JbCRieI1sDbzPcq3KXa2G7aeZS2QgL6nedUtT7DjW0XVwuUeNPMbtqdwugklR5qYa0XPdtVdMYi42b1fVQyd+vFVMbU3JPytewO0NNeWvO6gPBOxXWAzoAMNzczddLiuttv6q0msEhxBnhnLUVFOye5OfiGOQpM9JvhOyvbTcdh5FRkgdlY+R1dm3krxjgRVZ5T8OimhbuTgqXFpVCbiG64nsJULsjkPRLQhMnQUZ0IQAXpFUIQThck50IQBnRnQhAGdGdCEGM4RnCEIAzhGcIQghmXM4QhBjOjNW1NbDmUIRQam3PgupQdYVpfXT4TP+KO/KPEoQlMYqZUHE3bh5pp0+87acghCfjC8qYfGcdXE96QhCckAQEITJYYXBNc+yhHNazBx1DuzGnDYfMOPeuIWX2q/1SZuVZEble2oKyOLYE6FVzTVmt6VHyhCaYp1Jw+MA4120+/NCEtqSokUVQhCoP//Z'
          });
      }
      function handleClick6(e) {
        e.preventDefault();
        // swal("Functionality coming soon!")
        swal({
            title: "This is the home page redirection!",
            text: "Redirecting you to the Home Page",
            timer: 2000,
            buttons: false
          });
          setTimeout(myFunction, 3000)
          function myFunction(){ window.open("/");}
      }
    return (
        <div className='header'>
            <Link to='/'>
                <img onClick={handleClick6}
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
           
            <div  onClick={handleClick3} className='header__center'>
                <input type="text" placeholder="Enter your query" />
                <SearchIcon />
            </div>

            <div onClick={handleClick} className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
