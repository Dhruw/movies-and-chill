import React from 'react';

class ActorDetail extends React.Component {

	render(){
		return (
			<div>
				{this.props.actorDetail.birthday}   <br/>
				{this.props.actorDetail.known_for_department}   <br/>
				{this.props.actorDetail.deathday}   <br/>
				{this.props.actorDetail.id}   <br/>
				{this.props.actorDetail.name}   <br/>
				{/* also_known_as {
				  "Гаррісон Форд",
				  "Харрисон Форд",
				  "هاريسون فورد",
				  "해리슨 포드",
				  "ハリソン・フォード",
				  "แฮร์ริสัน ฟอร์ด",
				  "哈里森·福特",
				  "Харисън Форд"
				], */}
				{this.props.actorDetail.gender}    <br/>
				{this.props.actorDetail.biography}    <br/>
				{this.props.actorDetail.popularity}    <br/>
				{this.props.actorDetail.place_of_birth}    <br/>
				<img src={`https://image.tmdb.org/t/p/w200/${this.props.actorDetail.profile_path}`} alt="" />

				{this.props.actorDetail.profile_path}    <br/>
				{this.props.actorDetail.adult}    <br/>
				{this.props.actorDetail.imdb_id}    <br/>
				{this.props.actorDetail.homepage}    <br/>
			</div>
		)
	}
}

export default ActorDetail;


// {
// 	"birthday": "1942-07-13",
// 	"known_for_department": "Acting",
// 	"deathday": null,
// 	"id": 3,
// 	"name": "Harrison Ford",
// 	"also_known_as": [
// 	  "Гаррісон Форд",
// 	  "Харрисон Форд",
// 	  "هاريسون فورد",
// 	  "해리슨 포드",
// 	  "ハリソン・フォード",
// 	  "แฮร์ริสัน ฟอร์ด",
// 	  "哈里森·福特",
// 	  "Харисън Форд"
// 	],
// 	"gender": 2,
// 	"biography": "Legendary Hollywood Icon Harrison Ford was born on July 13, 1942 in Chicago, Illinois.  His family history includes a strong lineage of actors, radio personalities, and models.  Harrison attended public high school in Park Ridge, Illinois where he was a member of the school Radio Station WMTH. Harrison worked as the lead voice for sports reporting at WMTH for several years.  Acting wasn’t a major interest to Ford until his junior year at Ripon College when he first took an acting class.  Harrison Ford’s career started in 1964 when he travelled to California in search of a voice-over job. He never received that position, but instead signed a contract with Columbia Pictures where he earned $150 weekly to play small fill in roles in various films.  Through the 60’s Harrison worked on several TV shows including Gunsmoke, Ironside, Kung Fu, and American Style.  It wasn’t until 1967 that Harrison received his first credited role in the Western film, A Time for Killing. Dissatisfied with the meager roles he was being offered, Ford took a hiatus from acting to work as a self-employed carpenter. This seemingly odd diversion turned out to be a blessing in disguise for Harrison’s acting career when he was soon hired by famous film producer George Lucas.  This was a turning point in Harrison’s life that led to him be casted in milestone roles such as Hans Solo and Indiana Jones.  Since his most famous roles in the Star Wars Trilogy and Raiders of the Lost Ark, Harrison Ford has starred in over 40 films.  Many criticize his recent work, saying his performances have been lackluster leading to commercially disappointing films.  Harrison has always worked hard to protect his off-screen private life, keeping details about his children and marriages quite.  He has a total of five children including one recent adoption with third and current wife Calista Flockhart. In addition to acting Harrison Ford is passionate about environmental conservation, aviation, and archeology.",
// 	"popularity": 5.54,
// 	"place_of_birth": "Chicago, Illinois, USA",
// 	"profile_path": "/7CcoVFTogQgex2kJkXKMe8qHZrC.jpg",
// 	"adult": false,
// 	"imdb_id": "nm0000148",
// 	"homepage": null
//   }