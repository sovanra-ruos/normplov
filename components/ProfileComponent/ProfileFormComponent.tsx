// 'use client';
// import React from 'react';
// import { Formik, Form } from 'formik';
// import FieldProfile from './FieldProfile';

// const ProfileForm = () => {
//   const handleSubmit = (values: any) => {
//     alert(JSON.stringify(values, null, 2));
//   };

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         dateOfBirth: '',
//         gender: '',
//       }}
//       onSubmit={handleSubmit}
//     >
//       {() => (
//         <Form className="space-y-6">
//           {/* Name Field */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <FieldProfile
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Enter your name"
//             />
//           </div>

//           {/* Date Field */}
//           <div>
//             <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
//               Date of Birth
//             </label>
//             <FieldProfile
//               type="date"
//               name="dateOfBirth"
//               id="dateOfBirth"
//               placeholder="Select your date of birth"
//             />
//           </div>

//           {/* Dropdown Field */}
//           <div>
//             <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
//               Gender
//             </label>
//             <FieldProfile
//               type="select"
//               name="gender"
//               id="gender"
//               placeholder="Select your gender"
//               options={[
//                 { value: 'male', label: 'Male' },
//                 { value: 'female', label: 'Female' },
//                 { value: 'other', label: 'Other' },
//               ]}
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="px-4 py-2 bg-primary text-white rounded-xl"
//           >
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default ProfileForm;


'use client';
import React from 'react';
import { Formik, Form } from 'formik';
import FieldProfile from './FieldProfile';

// Define type for form values
type ProfileFormValues ={
  name: string;
  dateOfBirth: string;
  gender: string;
}

const ProfileForm = () => {
  const handleSubmit = (values: ProfileFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        dateOfBirth: '',
        gender: '',
      }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <FieldProfile
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          {/* Date Field */}
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <FieldProfile
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder="Select your date of birth"
            />
          </div>

          {/* Dropdown Field */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <FieldProfile
              type="select"
              name="gender"
              id="gender"
              placeholder="Select your gender"
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' },
              ]}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-xl"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
