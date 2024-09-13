import { z } from "zod";

const DogSchema = z.object({
  breed: z.string(),
  origin: z.string().optional(),
  size: z.object({
    standard: z
      .object({
        height: z.string(),
        weight: z.string(),
      })
      .optional(),
    miniature: z
      .object({
        height: z.string(),
        weight: z.string(),
      })
      .optional(),
    toy: z
      .object({
        height: z.string(),
        weight: z.string(),
      })
      .optional(),
    medium: z
      .object({
        height: z.string(),
        weight: z.string(),
        note: z.string().optional(),
      })
      .optional(),
  }),
  lifespan: z.string().optional(),
  coat: z.object({
    type: z.string(),
    colors: z.array(z.string()),
    grooming_styles: z.array(z.string()).optional(),
    shedding: z.string().optional(),
    maintenance: z.string().optional(),
  }),
  temperament: z.object({
    intelligent: z.boolean().optional(),
    active: z.boolean().optional(),
    alert: z.boolean().optional(),
    trainable: z.boolean().optional(),
    friendly: z.boolean().optional(),
    good_with_children: z.boolean().optional(),
    good_with_other_pets: z.boolean().optional(),
    sensitive: z.boolean().optional(),
    loyal: z.boolean().optional(),
    playful: z.boolean().optional(),
    sociable: z.boolean().optional(),
    obedient: z.boolean().optional(),
  }),
  health: z.object({
    common_issues: z.array(z.string()).optional(),
    life_expectancy: z.string().optional(),
    recommended_health_tests: z.array(z.string()).optional(),
    vaccinations: z.array(z.string()).optional(),
  }),
  history: z.object({
    origin: z.string().optional(),
    popularity: z.string().optional(),
    roles: z.array(z.string()).optional(),
    cultural_significance: z.string().optional(),
    evolution: z.string().optional(),
  }),
  care: z.object({
    exercise: z.string().optional(),
    grooming: z.string().optional(),
    training: z.string().optional(),
    diet: z.string().optional(),
    socialization: z.string().optional(),
    living_conditions: z.string().optional(),
  }),
  recognition: z.object({
    akc_group: z.string().optional(),
    fci_group: z.string().optional(),
    popularity_rank: z.string().optional(),
    other_organizations: z.array(z.string()).optional(),
    breed_standards: z
      .object({
        AKC: z.string().optional(),
        FCI: z.string().optional(),
      })
      .optional(),
  }),
  interesting_facts: z.array(z.string()).optional(),
  additional_information: z.object({
    hypoallergenic: z.string().optional(),
    activities: z.array(z.string()).optional(),
    famous_dogs: z
      .array(
        z.object({
          name: z.string(),
          owner: z.string().optional(),
          notes: z.string().optional(),
        })
      )
      .optional(),
    breed_clubs: z
      .array(
        z.object({
          name: z.string(),
          website: z.string().optional(),
        })
      )
      .optional(),
    related_breeds: z.array(z.string()).optional(),
    fci_standard_number: z.number().optional(),
    first_recorded: z.string().optional(),
    ancestors: z.array(z.string()).optional(),
    registrations: z
      .object({
        AKC: z.string().optional(),
        CKC: z.string().optional(),
        UKC: z.string().optional(),
        KC: z.string().optional(),
        FCI: z.string().optional(),
      })
      .optional(),
    breed_specific_laws: z.string().optional(),
    training_tips: z.array(z.string()).optional(),
    nutrition: z
      .object({
        diet_type: z.string().optional(),
        feeding_schedule: z.string().optional(),
        special_requirements: z.string().optional(),
      })
      .optional(),
    breeding: z
      .object({
        maturity_age: z.string().optional(),
        litter_size: z.string().optional(),
        gestation_period: z.string().optional(),
        breeding_recommendations: z.string().optional(),
      })
      .optional(),
    common_mixes: z
      .array(
        z.object({
          name: z.string(),
          cross_with: z.string(),
        })
      )
      .optional(),
    behavior: z
      .object({
        barking: z.string().optional(),
        digging: z.string().optional(),
        chewing: z.string().optional(),
        herding: z.string().optional(),
      })
      .optional(),
    suitable_for: z.array(z.string()).optional(),
    unsuitable_for: z.array(z.string()).optional(),
  }),
});

export type Dog = z.infer<typeof DogSchema>;
