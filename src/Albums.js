import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { FaQuoteRight } from 'react-icons/fa';
import people from './data';

const Albums = () => {
	// set array index as 0 (first person)
	const [index, setIndex] = React.useState(3);
	const { album,  artist, year, genre, favourite, image, text } = people[index];

	const checkNumber = (number) => {
		if (number > people.length - 1) {
			return 0;
		}
		if (number < 0) {
			return people.length - 1;
		}
		return number;
	};

	const nextPerson = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};
	const prevPerson = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
    };
    
    const randomPerson = () => {
        let random = Math.floor(Math.random() * people.length)
        if (random === index) {
            random++
        }
      setIndex(checkNumber(random))
    }

	console.log(people);
	return (
		<article className=' shadow-xl p2 max-w-6xl border-2 mx-10 mt-8 w-22 flex flex-col items-center justify-center gap-3'>

			<div className='mt-6 max-w-full relative flex flex-col'>
				<img
					src={image}
					alt='Reviews'
					className=' self-center w-36 h-36 object-cover rounded-full'
				/>
				<span className='grid place-items-center absolute top-0 -left-4 bg-blue-500 rounded-full w-10 h-10'>
					<FaQuoteRight></FaQuoteRight>
				</span>
			</div>

			<h3 className='text-center h3 capitalize font-sans'><span className="font-semibold">Album:</span> {album}</h3>
			<h4 className='h4 text-center mt-2 capitalize font-sans'><span className="font-semibold">Artist: </span>{artist}</h4>
			<h4 className='h4 text-center mt-2 capitalize font-sans'><span className="font-semibold">Released in:</span> {year}</h4>
			<h4 className='h4 text-center mt-2 capitalize font-sans'><span className="font-semibold">Genre: </span>{genre}</h4>
			<h4 className='h4 text-center mt-2 capitalize font-sans'><span className="font-semibold">Favourite song: </span>{favourite}</h4>
			<p className='par text-center m-2 p-2  font-sans'>{text}</p>
			<div className='flex justify-center mt-4'>
				<button  onClick={prevPerson}>
					<AiFillCaretLeft className='w-8 h-8' />
				</button>
				<button onClick={nextPerson}>
					<AiFillCaretRight className='w-8 h-8' />
				</button>
			</div>
			<button
				className='focus:outline-none p-4 border-2 rounded-2xl mb-4' onClick={randomPerson} 
			>
				Surprise me!
			</button>
		</article>
	);
};

export default Albums;
