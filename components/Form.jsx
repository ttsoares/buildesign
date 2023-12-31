import React from "react";

import { useForm } from "react-hook-form";

//--------------------------
function ContactForm({ submit, message }) {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  function onSubmit(data) {
    const object = {
      firstName: data.firstName,
      company: data.company,
      email: data.email,
      phoneNumber: data.phoneNumber,
      message: data.message,
    };

    submit(object);
  }

  return (
    <div className="flex flex-col justify-center items-center md:w-[80%] mx-auto">
      <h2 className="mb-5 text-base form-font-bold">
        (Prefere WhattsAPP? ☎️ 051 99256 7197)
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-5 mx-5 w-[70%]"
      >
        <div className="flex w-full flex-col justify-between space-y-2">
          <div className="shadow-md shadow-indigo-600/50 p-3 border-2 bg-slate-400 border-black rounded-lg transition-all duration-300 hover:scale-110 flex flex-col shrink">
            <div className="flex">
              <label htmlFor="firstName">Nome:</label>
              <input
                placeholder="Campo necessário"
                className="shrink flex-1 rounded-md ml-2 placeholder-shown:font-bold placeholder:text-red-500/50"
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "É necessário preencher o nome.",
                  },
                })}
              />
            </div>
            <p className="text-red-500">{errors.firstName?.message}</p>
          </div>

          <div className="shadow-md shadow-indigo-600/50 p-3 border-2 bg-slate-400 border-black rounded-lg transition-all duration-300 hover:scale-110 flex flex-col md:flex-row shrink">
            <label htmlFor="lastName">Empresa:</label>
            <input
              placeholder="Campo opcional"
              type="text"
              className="shrink flex-1 rounded-md ml-2"
              id="lastName"
              {...register("lastName")}
            />
          </div>
        </div>

        <div className="flex w-full flex-col justify-between space-y-2">
          <div className="shadow-md shadow-indigo-600/50 p-3 border-2 bg-slate-400 border-black rounded-lg transition-all duration-300 hover:scale-110 flex flex-col shrink">
            <div className="flex ">
              <label htmlFor="email">Email:</label>
              <input
                placeholder="Campo necessário"
                className="shrink flex-1 rounded-md ml-2 placeholder-shown:font-bold placeholder:text-red-500/50"
                type="email"
                id="email"
                {...register("email", {
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Isso não parece ser um endereço válio !",
                  },
                  required: "É necessário preencher o email.",
                })}
              />
            </div>
            <p className="text-red-500">{errors.email?.message}</p>
          </div>

          <div className="shadow-md shadow-indigo-600/50 p-3 border-2 bg-slate-400 border-black rounded-lg transition-all duration-300 hover:scale-110 flex flex-col md:flex-row shrink">
            <label htmlFor="phoneNumber">Telefone:</label>
            <input
              placeholder="Campo opcional"
              className="shrink flex-1 rounded-md ml-2"
              type="tel"
              id="phoneNumber"
              {...register("phoneNumber")}
            />
          </div>
        </div>

        <div className="flex w-full flex-col justify-between">
          {message ? (
            <div className="flex justify-center items-center shadow-md shadow-indigo-600/50 p-2 h-fit border-2 bg-slate-400 border-black rounded-lg transition-all duration-300 hover:scale-110 flex-col shrink">
              <label className="self-start" htmlFor="message">
                Menssagem:
              </label>
              <textarea
                placeholder="Campo necessário"
                id="message"
                name="message"
                {...register("message", {
                  required: "Seria melhor dizer algo....",
                })}
                className="flex-1 w-full shrink h-32 rounded-lg ml-2 placeholder-shown:font-bold placeholder:text-red-500/50"
              />
              <p className="text-red-500 self-start">
                {errors.message?.message}
              </p>
            </div>
          ) : (
            <div className="flex justify-center items-center shadow-md shadow-indigo-600/50 p-2 h-fit border-2 bg-slate-400 border-black rounded-lg transition-all duration-300 hover:scale-110 flex-col shrink">
              <label className="self-start" htmlFor="message">
                Menssagem:
              </label>
              <textarea
                placeholder="Campo opcional"
                id="message"
                name="message"
                {...register("message")}
                className="flex-1 w-full shrink h-32 rounded-lg ml-2"
              />
            </div>
          )}

          <button
            className="px-4 py-3 mt-7 min-w-[25%] bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-50 transition-transform mx-5 flex duration-300 hover:bg-blue-800 hover:border-2"
            type="submit"
          >
            <span className="self-center w-full">Submeter</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
