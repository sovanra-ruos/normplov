import React from "react";
import Button from "../AuthComponents/ButtonComponentForAuth";


type LogoutComponentProps = {
  onClose: () => void;
  onConfirm: () => void;
};

const LogoutComponent: React.FC<LogoutComponentProps> = ({ onClose, onConfirm }) => {
  return (
    <section className="w-1/4 h-2/6 text-center content-center bg-white  rounded-xl">
      <div className="">
        {/* <button className="text-3xl"><IoMdClose /></button> */}
        <h1 className="text-3xl text-primary font-bold ">បញ្ចាក់ការចាកចេញ</h1>
        <p className="text-lg pt-3 text-textprimary">តើអ្នកពិតជាចង់ចាកចេញមែនទេ?</p>
        <div className="flex  gap-5 mt-4 justify-center">
          <Button
            type="button"
            text="Yes"
            onClick={onConfirm} // Confirm the logout
            className="w-24 bg-primary hover:bg-primary-dark text-white font-medium border-collapse"
          />
            <Button
              type="button"
              text="No" // Use the close icon for the button
              onClick={onClose} // Close the modal
              className="w-24 border hover:bg-slate-500 text-red-500 font-medium border-collapse flex items-center justify-center" // Center the icon
            />
        </div>
      </div>
    </section>
  );
};

export default LogoutComponent;