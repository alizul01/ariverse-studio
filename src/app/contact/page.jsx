'use client'
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import ContactInfoWidget from "@/app/ui/Widget/ContactInfoWidget";
import {Icon} from "@iconify/react";
import {useForm} from "react-hook-form";

export default function ContactPage() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        event.preventDefault();
        console.log(data);
    };

    return (
        <>
            <PageHeading
                title="Contact Us"
                bgSrc="/images/contact_hero_bg.jpeg"
                pageLinkText="Contact"
            />
            <Spacing lg="150" md="80"/>
            <Div className="container">
                <Div className="row">
                    <Div className="col-lg-6">
                        <SectionHeading
                            title="Do you have a project <br/>in your mind?"
                            subtitle="Getting Touch"
                        />
                        <Spacing lg="55" md="30"/>
                        <ContactInfoWidget withIcon/>
                        <Spacing lg="0" md="50"/>
                    </Div>
                    <Div className="col-lg-6">
                        <form onSubmit={onSubmit} className="row">
                            <Div className="col-sm-6">
                                <label className="cs-primary_color">Full Name*</label>
                                <input type="text" className="cs-form_field" {...register("name")}/>
                                <Spacing lg="20" md="20"/>
                            </Div>
                            <Div className="col-sm-6">
                                <label className="cs-primary_color">Email*</label>
                                <input type="text" className="cs-form_field"/>
                                <Spacing lg="20" md="20"/>
                            </Div>
                            <Div className="col-sm-6">
                                <label className="cs-primary_color">Project Type*</label>
                                <input type="text" className="cs-form_field"/>
                               <Spacing lg="20" md="20"/>
                            </Div>
                            <Div className="col-sm-6">
                                <label className="cs-primary_color">Mobile*</label>
                                <input type="text" className="cs-form_field"/>
                                <Spacing lg="20" md="20"/>
                            </Div>
                            <Div className="col-sm-12">
                                <label className="cs-primary_color">Mobile*</label>
                                <textarea
                                    cols="30"
                                    rows="7"
                                    className="cs-form_field"
                                ></textarea>
                                <Spacing lg="25" md="25"/>
                            </Div>
                            <Div className="col-sm-12">
                                <button className="cs-btn cs-style1">
                                    <span>Send Message</span>
                                    <Icon icon="bi:arrow-right"/>
                                </button>
                            </Div>
                        </form>
                    </Div>
                </Div>
            </Div>
            <Spacing lg="150" md="80"/>
            <Div className="cs-google_map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5026830854117!2d112.6161209!3d-7.946891200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827687d272e7%3A0x789ce9a636cd3aa2!2sState%20Polytechnic%20of%20Malang!5e0!3m2!1sen!2sid!4v1735457310990!5m2!1sen!2sid"
                    allowFullScreen
                    title="Google Map"
                />
            </Div>
            <Spacing lg="50" md="40"/>
        </>
    );
}
