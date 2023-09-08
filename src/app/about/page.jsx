import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button '

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          fill={true} alt=''
          className={styles.img}
          />
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Digital Storytellers</h1>
            <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
          </div>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid amet iste, 
          molestiae fugit quos consectetur, ipsam magni ratione modi accusamus, nemo vel sit nesciunt 
          nulla accusantium. Fugiat, corporis reprehenderit.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ut facilis tenetur recusandae 
          adipisci quia aperiam commodi aliquam. Reiciendis facilis, illum aperiam ducimus ipsam temporibus 
          debitis quos totam ipsum excepturi!
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quos laudantium necessitatibus 
          dolor nihil modi iusto. Nihil cupiditate a voluptatibus error, quaerat, nisi aut veritatis assumenda 
          repellat nostrum expedita eligendi!
        </p>
      </div>
      <div className={styles.item}>
      <h1 className={styles.title}>What We Do?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid amet iste, 
          molestiae fugit quos consectetur, ipsam magni ratione modi accusamus, nemo vel sit nesciunt 
          nulla accusantium. Fugiat, corporis reprehenderit.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ut facilis tenetur recusandae 
          adipisci quia aperiam commodi aliquam.
          <br />
          <br /> -Creative Illustrations 
          <br />
          <br /> - Dynamic Websites 
          <br />
          <br /> - Fast and Handy Mobile Apps
        </p>
        <Button url="/contact" text="Contact"/>
      </div>
      </div>
    </div>
  )
}

export default About
