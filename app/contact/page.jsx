"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import ContactForm from "@/components/Form";

//------------------
const Page = () => {
  useEffect(() => {
    emailjs.init("CFMMXCFGd0f_hv9k2");
  }, []);

  const [loading, setLoading] = useState(false);

  async function submit(resp) {
    setLoading(true);

    const serviceId = "service_dp8kh53";
    const templateId = "template_yjte46j";

    try {
      await emailjs.send(serviceId, templateId, {
        nome: resp.firstName + " from " + resp.company,
        email: resp.email,
        fone: resp.phoneNumber,
        mensagem: resp.message,
      });
      setLoading(false);
      alert("Sua mensagem foi enviada !");
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return (
      <div className="w-full h-screen ">
        <div className="flex w-full h-full justify-center items-center">
          <h1 className=" text-5xl font-bold animate-bounce">Enviando...</h1>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full h-screen">
      <ContactForm message={true} submit={submit} />
    </section>
  );
};

export default Page;
