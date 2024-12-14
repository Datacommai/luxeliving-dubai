import { Footer } from '../components/footer/footer';

import { Navigation } from '../components/navigation/navigation';

import Link from 'next/link';

export default function TermsOfUse() {
 const date = new Date('2024-10-07');
 const formattedDate: string = date.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
 });

 return (
  <main className="h-full">
   <Navigation hideLinks={true} />
   <section className="lg:px-20 md:px-10 xxs:py-5 md:py-10 ">
    <section className="mx-12 my-2">
     <h2 className="text-black xxs:mb-5 lg:my-10 font-bold xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
      Terms of Use
     </h2>
     <p className="my-2 font-medium xxs:text-sm md:text-lg">Legal Disclaimer</p>
     <article className="my-5 xxs:text-sm md:text-lg">
      These Terms and Conditions (<q>Terms</q>) govern your access and use of
      LuxeLivingDubai&apos;s website (<q>Website</q>). By using this Website,
      you agree to comply with and be bound by these Terms. If you do not agree
      to these Terms, please do not use this Website
     </article>
    </section>

    <section className="mx-12 my-2">
     <p className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
      1. Copyright Notice
     </p>

     <article className="my-5 xxs:text-sm md:text-lg">
      All content, including but not limited to text, images, graphics, layout,
      and design, is the property of [Your Business Name] and is protected under
      copyright laws. Unauthorized reproduction, distribution, or modification
      of any material on this Website is strictly prohibited.
     </article>
     <p className="my-2 mb-4 font-normal xxs:text-sm md:text-lg">
      Copyright &copy; LuxeLivingDubai {new Date().getFullYear()}, All Rights
      Reserved.
     </p>
    </section>

    <section className="mx-12 my-2">
     <p className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
      2. Trademarks
     </p>
     <article className="my-5 xxs:text-sm md:text-lg">
      All trademarks, logos, and service marks displayed on this Website are the
      property of LuxeLivingDubai or its affiliates unless otherwise stated.
      Unauthorized use of these trademarks is prohibited.
     </article>
    </section>

    <section className="mx-12 my-2">
     <p className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
      3. Acceptance of Terms
     </p>
     <article className="my-5 xxs:text-sm md:text-lg">
      By accessing this Website, you acknowledge and accept these Terms. Your
      continued use of this Website constitutes your agreement to these Terms
      and any future updates or modifications.
     </article>
    </section>

    <section className="mx-12 my-2">
     <p className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
      4. Use of Information and Materials
     </p>
     <ol className="space-y-2 my-5 font-light">
      <li>
       - The information and materials on this Website are provided in good
       faith and for general information purposes only.
      </li>
      <li>
       - Users are solely responsible for verifying the accuracy, completeness,
       and relevance of the information before relying on it for any purpose.
      </li>
      <li>
       - Not all products or services mentioned on this Website may be available
       in all geographic areas. Eligibility for specific services is subject to
       LuxeLivingDubai’s discretion and approval.
      </li>
     </ol>
    </section>

    <section className="mx-12 my-2">
     <p className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
      5. No Warranty
     </p>

     <article className="my-5 xxs:text-sm md:text-lg">
      LuxeLivingDubai strives to ensure that the information provided on this
      Website is accurate and up-to-date. However, we make no guarantees or
      warranties, express or implied, regarding the accuracy, completeness,
      reliability, or availability of any content, services, or products
      provided.
      <br />
      <span className="font-medium xxs:text-sm md:text-lg">
       Disclaimer:{' '}
      </span>{' '}
      This Website should not be considered a substitute for professional legal,
      financial, or real estate advice. Users rely on the information provided
      at their own risk.
     </article>
    </section>

    <section className="mx-12 my-2">
     <p className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
      6. Limitation of Liability
     </p>
     <article className="my-5 xxs:text-sm md:text-lg">
      Under no circumstances shall LuxeLivingDubai or its affiliates, employees,
      or directors be held liable for any direct, indirect, incidental, or
      consequential damages arising from:
     </article>
     <ol className="space-y-2 my-5 font-light">
      <li>- Use or inability to use this Website.</li>
      <li>- Errors, omissions, or inaccuracies in the information provided.</li>
      <li>- Computer viruses or technical failures impacting the Website.</li>
     </ol>
     <article className="my-5 xxs:text-sm md:text-lg">
      This limitation of liability applies to the fullest extent permitted by
      applicable law.
     </article>
    </section>

    <section className="mx-12 my-2">
     <p className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
      7. User Submissions
     </p>

     <article className="my-5 xxs:text-sm md:text-lg">
      Any information submitted by users through this Website becomes the
      property of LuxeLivingDubai. By submitting content, you grant
      LuxeLivingDubai a non-exclusive, royalty-free, perpetual, and irrevocable
      license to use, reproduce, and distribute the content for any purpose.
      <br />
      We will handle sensitive personal information in accordance with our{' '}
      <span className="font-semibold xxs:text-sm md:text-lg">
       Privacy Policy
      </span>{' '}
      and applicable laws.
     </article>
    </section>

    <section className="mx-12 my-2">
     <p className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
      8. Modifications to Terms
     </p>

     <article className="my-5 xxs:text-sm md:text-lg">
      LuxeLivingDubai reserves the right to modify, update, or replace these
      Terms at any time without prior notice. Users are encouraged to review
      these Terms regularly. Continued use of the Website constitutes acceptance
      of any changes.
     </article>
    </section>

    <section className="mx-12 my-2">
     <p className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
      9. Governing Law and Jurisdiction
     </p>

     <article className="my-5 xxs:text-sm md:text-lg">
      These Terms are governed by the laws of the United Arab Emirates (UAE).
      Any disputes arising from the use of this Website shall be subject to the
      exclusive jurisdiction of the courts in Dubai.
     </article>
    </section>

    <section className="mx-12 my-8">
     <p className="text-black font-medium xxs:text-xl md:text-2xl xxs:leading-tight md:leading-tight">
      10. Contact Information
     </p>
     <article className="my-5 xxs:text-sm md:text-lg">
      If you have any questions or concerns about these Terms or the Website,
      please contact us at:
      <Link
       className="underline text-success gap-1"
       href="mailto: info@luxelivingdubai.com">
       info@luxelivingdubai.com
      </Link>
     </article>
    </section>

    <section className="mx-12 my-4">
     <p className="my-2 font-medium xxs:text-sm md:text-lg">
      Last Updated: {formattedDate}
     </p>
    </section>
   </section>
   <Footer />
  </main>
 );
}
