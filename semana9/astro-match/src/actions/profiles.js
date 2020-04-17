import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marioluz/clear')
};
export const getProfileToSwipe = () => async dispatch => {
	const response = await axios.get(
		"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marioluz/person"
	);
	dispatch(setProfileToSwipe(response.data.profile));
};

export const chooseProfile = (id,option) => async dispatch =>{
	await axios.post(
		"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marioluz/choose-person",
	 {

	   id,
	    choise: option
     }
    );
     dispatch(getProfileToSwipe());
};

export const getMatches = () => async (dispatch) => {
	const response =await axios.get (
		"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marioluz/matches"
	);
	dispatch(setMatches(response.data.matches));
};

export const setProfileToSwipe = profile => ({
	type: "SET_PROFILE_SWIPE",
	payload: {
		profile
	}
});

export const setMatches = matches => ({
	type: "SET_MATCHES",
	payload:{
		 matches
	}
});


