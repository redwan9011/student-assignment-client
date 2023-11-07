

const Faq = () => {
    return (
        <div className="my-10 ">
          <h1 className="text-center font-bold text-4xl md:text-6xl mb-5">FA<span className="text-red-600">Q?!</span></h1>
           <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How do I create or join a study group?
  </div>
  <div className="collapse-content"> 
    <p>To create or join a study group, simply sign in to your account and navigate to the Study Groups section. From there, you can create your own group or search for existing groups based on your subjects or interests. Joining a group is as simple as clicking the Join button, and creating one involves providing some basic information about your groups purpose and goals.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 my-3">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Can I invite specific classmates to my study group?
  </div>
  <div className="collapse-content"> 
    <p>Yes, you can invite specific classmates to your study group. When you create a study group, youll have the option to invite other users by their usernames or email addresses. Additionally, you can share an invitation link with your classmates, allowing them to join your group with ease.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How can I share and collaborate on assignments within my study group?
  </div>
  <div className="collapse-content"> 
    <p>Sharing and collaborating on assignments is a breeze. When youre in a study group, simply navigate to the Tasks or Assignments section. You can create tasks, upload assignment files, and set deadlines. Group members can access and edit the tasks collaboratively. Once tasks are complete, they can be marked as finished, making it easy to track your groups progress.</p>
  </div>
</div>
        </div>
    );
};

export default Faq;