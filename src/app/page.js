import Image from "next/image";
import styles from "./page.module.css";
import ParallaxComponent from '@/components/ParallaxComponent'
import TextBlock from '@/components/TextBlock'

export default function Home() {
  return (
    <main className={styles.main}>
      <ParallaxComponent/>
    </main>
  );
}
