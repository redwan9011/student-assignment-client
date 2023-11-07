import PropTypes from "prop-types"

const CardShow = ({card}) => {
    const {title, img, description} = card || {}
    return (
        <div>
                 <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-full h-48" src={img} alt="study image" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
   
  </div>
</div>
        </div>
    );
};
CardShow.propTypes = {
    card: PropTypes.object
}

export default CardShow;