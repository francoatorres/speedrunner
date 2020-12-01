function Joanna(props) {
    const {modals, buttons} = props;
  return (
    <div>
        {modals.map(modal => {
            console.log(modal);
        })}
    </div>
  );
}

export default Joanna;