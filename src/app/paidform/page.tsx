'use client';

import { FormEvent } from 'react';

const OrderForm: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement form submission logic here if needed
  };

  return (
    <section className="max-w-2xl mx-auto mb-16 space-y-6 px-4">
      <h2 className="text-2xl font-semibold text-purple-800 text-center mb-4">Order Information</h2>
      <p className="text-purple-700 text-center leading-relaxed mb-6">
        Please fill out the form below after completing your payment. Make sure to include your transaction ID so we can confirm your payment.
      </p>
      <form
        action="https://formsubmit.co/chepenikconor@gmail.com"
        method="POST"
        className="bg-white p-6 rounded-lg shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Anti-spam field */}
        <input type="hidden" name="_captcha" value="false" />
        {/* Redirect after submission */}
        <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-purple-800 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="w-full border border-purple-300 rounded-lg p-2 mt-1 bg-white focus:ring focus:ring-purple-300"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-purple-800 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Your email address"
            className="w-full border border-purple-300 rounded-lg p-2 mt-1 bg-white focus:ring focus:ring-purple-300"
          />
        </div>

        {/* Address Field */}
        <div>
          <label htmlFor="address" className="block text-purple-800 font-medium">
            Shipping Address
          </label>
          <textarea
            id="address"
            name="address"
            required
            placeholder="Your shipping address (Street, City, State, ZIP)"
            className="w-full border border-purple-300 rounded-lg p-2 mt-1 bg-white focus:ring focus:ring-purple-300"
            rows={3}
          ></textarea>
        </div>

        {/* Transaction ID */}
        <div>
          <label htmlFor="transactionId" className="block text-purple-800 font-medium">
            Payment Transaction ID
          </label>
          <input
            type="text"
            id="transactionId"
            name="transactionId"
            required
            placeholder="Transaction ID from your Lightning payment"
            className="w-full border border-purple-300 rounded-lg p-2 mt-1 bg-white focus:ring focus:ring-purple-300"
          />
        </div>

        {/* Preferred Color */}
        <div>
          <label htmlFor="color" className="block text-purple-800 font-medium">
            Preferred Color (Optional)
          </label>
          <input
            type="text"
            id="color"
            name="color"
            placeholder="Let us know your preferred color (e.g., Orange)"
            className="w-full border border-purple-300 rounded-lg p-2 mt-1 bg-white focus:ring focus:ring-purple-300"
          />
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-purple-800 font-medium">
            Additional Notes (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Anything else you'd like us to know?"
            className="w-full border border-purple-300 rounded-lg p-2 mt-1 bg-white focus:ring focus:ring-purple-300"
            rows={3}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            Submit Order
          </button>
        </div>
      </form>
    </section>
  );
};

export default OrderForm;