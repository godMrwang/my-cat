import { Product, Article } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wild Caught Salmon Recipe',
    category: 'Dry Food',
    description: 'Omega-rich formula for coat luster and joint health.',
    price: 38.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTg6y9kX8S63h5c7EBjlT0PSUNim40NBav5fy36riK_jHF5jn037N6yvP73GaJzUjRy_HCX9SJZ3U_GwYdZQty0iGA_d2YfWvwkAcrKUNAPIyXFI4OLFBueOlLUSe76EidrM6k1QTxVLgzx3HKUPRdM-mNFwRBAi9B7heXYBjVGmgFiVvjF7dobmCJz_rS691_1NcvoBABR0IpZatlsZlwFpdkInZuRwkkZ3kKhfWsMcAHQ8EjNG_0HPyYZve0pUrjiE22Z845Ug8',
    tags: ['Grain-Free'],
    lifeStage: 'Adult',
    dietaryPreference: ['Grain-Free'],
    protein: ['Wild Salmon'],
    analysis: { protein: '38.0%', fat: '17.0%', fiber: '3.5%', moisture: '10.0%', taurine: '0.2%' },
    ingredients: ['Deboned Atlantic Salmon', 'Organic Sweet Potatoes', 'Wild-Caught Whitefish Meal', 'Peas & Flaxseed']
  },
  {
    id: '2',
    name: 'Indoor Multi-Benefit Chicken',
    category: 'Dry Food',
    description: 'Calorie-controlled nutrition for stationary lifestyles.',
    price: 34.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw8Vsc4unarKHr8xNk1E4PjOiwocx6W5Ijw4qgx_hyiVlyiINHOmrdA8cIQRyHX9KF6qEeQoTY4yxFO5TMCD_2QPK8HbhdVal2unfxU6tHpZxkTY89OlBQTOXwcqW9xmC_xGfx4X1MuCvB4yiGTVczUn4BMdWg9GnK_kV4SWEzSYGDV1TejeO6U8qqvEZs9eGG_jRA2JEkM5_Lv9BbZTqHc5HPUBUYHXTCPi-tcDyshPaYfBkEwd-OiOBCUv_A7_EUQaoHa0LtWqM',
    tags: ['Indoor Care'],
    lifeStage: 'Adult',
    dietaryPreference: ['Indoor Formula'],
    protein: ['Free-Range Chicken'],
    analysis: { protein: '34.0%', fat: '14.0%', fiber: '5.0%', moisture: '10.0%', taurine: '0.15%' }
  },
  {
    id: '3',
    name: 'Vitality Kitten Formula',
    category: 'Dry Food',
    description: 'Enhanced DHA for cognitive development and rapid growth.',
    price: 42.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGNbl_4MV6az63a2KL1SuFGxKPe9p78G9hbhs2dULIFO-rRJKsfyyvs58X3ezO0onv_FSGUXWxhGJHv-aQC2iABYbuEYSAySVw_XoF-5Kq1BlWhqPBdLTN8kz6v2K3r1R4VtGBpeyBQBadGImn0Xm28otFQeQDjGuelyUwFb9zvX0SjNjEJ8wSKsF6ammbNHMCA89j8X7yy6hv-5ul_7MesmqT1DbeVAPZLC2Z5OflTVDM3GGwMeDG8CsBGrNXO4Kq1vMsBXYeY_w',
    tags: ['Kitten Growth'],
    lifeStage: 'Kitten',
    dietaryPreference: ['High Protein'],
    protein: ['Free-Range Chicken']
  },
  {
    id: '4',
    name: 'Grass-Fed Beef Entrée',
    category: 'Wet Food',
    description: 'Red meat protein for active muscle maintenance.',
    price: 40.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOn_qiTjTNC9hSD3hdAkCyBuv2q9t1t-_nPUZTncb0sjF72mwmmJsoTObjS4-gb4RyZ9YMduaQROwnQ3ymNBZAdYEhqb5rAIVo_ifbLc1Wi5DsciSWV81mhJhgPjpVRJ7sMa9WvZX9X_t-jyPjWgp7X5nsuKUm8fNB0Va93COcYmlrpMMw_jPb0wOO7XO4MzUBOKBgBcqVqojasVXOlrbp-gHu688kte3yv3irmuF7457Ots9Eava3GShf3AxYzOa99A8AuJNj4vw',
    lifeStage: 'Adult',
    protein: ['Grass-Fed Beef']
  },
  {
    id: '5',
    name: 'Hypoallergenic Whitefish',
    category: 'Dry Food',
    description: 'Limited ingredients for feline digestion sensitivities.',
    price: 45.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtyXWMx3YiTiYRJTTyt3TfzUGKlAPXOler4Qy7_d8cMfzYUZBcMRErDZNIg5yngtJlN1V8bvkqLW7QEEBXfooAiwojvhElUKZ5Y6XoYD9-V8pNpxtwvy_Ru5_4dNaOiI1sk-CLaF0o_ccgXeWcWKIlUi_lNEn8FcdE6UTLplLA8RfCK0BS39R125p6UNdUYaC2c2cksbMUANxBWKIOtpw0_5KVzVY05jsmiV8cKvPr7ipKnstntEaN_lCAWQ_mmRGJabYSqtYY18g',
    tags: ['Sensitive'],
    lifeStage: 'Senior',
    dietaryPreference: ['Sensitive Stomach'],
    protein: ['Wild Salmon']
  },
  {
    id: '6',
    name: 'Atlantic Tuna & Mackerel',
    category: 'Wet Food',
    description: 'Highly palatable seafood blend for picky eaters.',
    price: 36.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgejIwD8U_kFyWY6cROWGlaisMJxkHEQ2Vbx_1jm6jgkbOeFO1mkbFp54va-Zjwa7_aIxNH_4pDyGHm5cQ3DnebP64lxllWxRR_2Y6QH4g2P6c7tNHpyoH0n5WUIm6b8Z1kZPRVivVkbzfCv2JkkVM-XtFWe1NPG8uq0eAD3TS2N-mQKS1jzfQrau51MUuoZBWhPQUEtVRq3Q55N761FmhpnyTU0DGX4Klwwo7S6VIa0b-f-Adln3T1j_g_p4DEdlP7ODEmkQbA9E',
    lifeStage: 'Adult',
    protein: ['Atlantic Tuna']
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Understanding the Obligate Carnivore',
    category: 'NUTRITION',
    readTime: '5 MIN READ',
    author: 'Dr. Elena Vance, DVM',
    date: 'March 15, 2024',
    summary: 'Why plant-based fillers have no place in a feline\'s bowl and what your cat really needs for organ health.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU26cADqmSvHm6Hi87CuECUeCD2PCkucUgIga3LgJ3wQJD5GSldXB2d5EAZRzhsCWTe3HKrnWuxQP8rmM7JVQO3FEFhtnDREgiOok3h_qWKnohzGKm22fWLBPwLXNyW2fog2hxOZqc4WWJveRZ835iv260jvh-V2KYiEBc-Gvkb4B82CxUvJ1F1fm_K0q5mIhHXg83JOvUxU40KLSo5zpQHzHrEdBapK2NfQmps9Ppy0dIN5qZZBgqNlJYH6Iq-mDYiC1Hx7AFADI',
    content: `
      <p>As obligate carnivores, cats have biological requirements that differ fundamentally from dogs or humans. Their systems are evolved to process animal tissues, not plant starches.</p>
      <h3>The Biological Inevitability</h3>
      <p>Felines lack the specific enzymes necessary to break down complex carbohydrates efficiently. When we introduce heavy grains or legumes into their diet, we stress the pancreas and risk inflammatory responses.</p>
      <h3>The Amino Acid Profile</h3>
      <p>Critical nutrients like Taurine and Arginine are found almost exclusively in animal proteins. A deficiency in these can lead to cardiomyopathy and blindness. Our research suggests that the bio-availability of these nutrients is highest when sourced from fresh, wild-caught or grass-fed meats.</p>
    `
  },
  {
    id: 'a2',
    title: 'Hydration: The Silent Pillar of Health',
    category: 'LIFESTYLE',
    readTime: '4 MIN READ',
    author: 'Sarah Jenkins, Feline Ethologist',
    date: 'February 28, 2024',
    summary: 'Creative ways to ensure your cat remains adequately hydrated, even with a low thirst drive.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRMjRLUasWvi-7PSrDh5cSJccUWmOonn5e-gncKQmYUhtg52mqWXXo9n10TwmLAjy6eEPqJyVmMtVRMh_z892Q0oPDuQCv8D0h9eXgdLeX23HFknDkjTgVcA724QgvNU4z1bxn4RQdIwxy2JCyoqMXOhvjx6rp6SxVCK0MvAF_SSZQwAG7PHHMOCeTH98sRrIzvv7KuMZbshv0bGfA6rntWNdNg8bsIj8BkAwEtE5vX95zjy6br6Yr8lZ1paMcTSwDls5K3R0tRAM',
    content: `
      <p>Domestication hasn't changed the desert-dwelling origins of the modern cat. Their thirst drive remains low because their ancestors gathered moisture from their prey.</p>
      <h3>The Moisture Gap</h3>
      <p>Dry kibble often contains less than 10% moisture, whereas a natural feline diet is closer to 70-80%. This gap often leads to chronic low-level dehydration, a precursor to renal issues.</p>
      <h3>Strategies for High-Moisture Living</h3>
      <p>1. Incorporate wet food toppers into every meal. 2. Use filtered water fountains to stimulate interest through movement. 3. Consider "broths" specifically formulated for feline palates.</p>
    `
  }
];
