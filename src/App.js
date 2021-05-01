import './index';
import React from 'react';
import Albums from './Albums';

function App() {
  document.title= "Calvyn's favourite albums"
	return (
		<main className='box-border bg-gray-200 p-8'>
			<div className='w-100vw flex flex-col content-center justify-center'>
        <h1 className='h1 text-center my-6'>My favorite albums</h1>
        <div className="w-24 h-2 bg-black self-center mb-6 "></div>
				<div className='p-6 w-4/5 h-full m-auto bg-blue-400 grid place-items-center'>
					<Albums></Albums>
				</div>
			</div>
		</main>
	);
}

export default App;
